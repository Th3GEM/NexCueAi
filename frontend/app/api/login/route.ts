import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isValidPassword = await bcrypt.compare(
      body.password,
      user.password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid password",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        fullName: user.fullName,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Login failed",
      },
      {
        status: 500,
      }
    );
  }
}