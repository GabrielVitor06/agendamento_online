import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { clients } from "@/lib/schema";
import { hashPassword } from "@/lib/hash";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, password } = body;

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

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    await db.insert(clients).values({
      name,
      email,
      phone,
      password: hashedPassword,
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
