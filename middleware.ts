/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Caminho protegido (pode ajustar conforme necessário)
const adminOnlyRoute = "/agendados";

// E-mail do administrador autorizado
const ADMIN_EMAIL = "admin@example.com";

// Middleware padrão do Next.js
export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET;

  const pathname = req.nextUrl.pathname;

  // Se não for a rota protegida, continua normalmente
  if (!pathname.startsWith(adminOnlyRoute)) {
    return NextResponse.next();
  }

  // Se não houver token, redireciona para login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET!);
    const userEmail = (decoded as any).email;

    if (userEmail === ADMIN_EMAIL) {
      return NextResponse.next(); // Acesso liberado para o admin
    } else {
      return NextResponse.redirect(new URL("/unauthorized", req.url)); // rota de erro ou acesso negado
    }
  } catch (error) {
    console.error("Erro ao verificar token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
