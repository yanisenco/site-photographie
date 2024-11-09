// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function GET() {
  return NextResponse.json(
    { message: "Use POST method for login" },
    { status: 405 }
  );
}

export async function POST(request: Request) {
  await connectToDatabase();
  const { username, password } = await request.json();

  const user = await User.findOne({ username });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: "Login successful",
    user: { username: user.username },
  });
}
