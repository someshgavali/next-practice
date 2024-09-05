import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const userId = parseInt(params.id);
  const userData = user.find((item) => item.id === userId);

  if (!userData) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(userData, { status: 200 });
}
