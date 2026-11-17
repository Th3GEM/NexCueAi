import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    const user = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
}