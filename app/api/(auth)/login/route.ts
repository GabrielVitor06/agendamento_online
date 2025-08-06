import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { clients } from "@/lib/schema";
import { verifyPassword } from "@/lib/hash";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    return NextResponse.json(
      { message: "Chave secreta JWT não configurada." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const user = await db
      .select()
      .from(clients)
      .where(eq(clients.email, email))
      .then((res) => res[0]);

    if (!user) {
      return NextResponse.json(
        { message: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        { message: "Senha do usuário não cadastrada." },
        { status: 500 }
      );
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Senha incorreta." },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      { message: "Login realizado com sucesso." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao encontrar cliente:", error);
    return NextResponse.json(
      { message: "Erro interno ao encontrar cliente." },
      { status: 500 }
    );
  }
}
