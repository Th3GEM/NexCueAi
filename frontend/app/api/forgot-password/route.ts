import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "No account found with that email",
      });
    }

    const token = crypto.randomUUID();

    await prisma.passwordResetToken.create({
      data: {
        email: body.email,
        token,
      },
    });

    return NextResponse.json({
      message: "Reset token created successfully",
      token,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}