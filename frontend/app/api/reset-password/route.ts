import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const resetToken =
      await prisma.passwordResetToken.findUnique({
        where: {
          token: body.token,
        },
      });

    if (!resetToken) {
      return NextResponse.json(
        {
          message: "Invalid token",
        },
        {
          status: 404,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    await prisma.user.update({
      where: {
        email: resetToken.email,
      },
      data: {
        password: hashedPassword,
      },
    });

    await prisma.passwordResetToken.delete({
      where: {
        token: body.token,
      },
    });

    return NextResponse.json({
      message:
        "Password reset successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
