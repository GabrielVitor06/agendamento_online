import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { clients } from "@/lib/schema";
import { hashPassword } from "@/lib/hash";
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
    const { name, email, phone, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(clients)
      .where(eq(clients.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: "Este e-mail já está cadastrado." },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);

    await db.insert(clients).values({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Buscar o usuário inserido para pegar o ID
    const newUser = await db
      .select()
      .from(clients)
      .where(eq(clients.email, email));

    const user = newUser[0];

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return NextResponse.json(
      { message: "Cliente criado com sucesso." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    return NextResponse.json(
      { message: "Erro interno ao cadastrar cliente." },
      { status: 500 }
    );
  }
}
