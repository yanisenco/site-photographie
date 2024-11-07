// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import User from "../../../models/User";

export async function GET() {
  await connectToDatabase();

  try {
    const users = await User.find({}); // User est un modèle Mongoose
    return NextResponse.json(users, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  await connectToDatabase();

  try {
    const data = await request.json();
    const newUser = new User(data);
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
