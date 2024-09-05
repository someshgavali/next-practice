import { user } from "@/util/db";
import { NextResponse } from "next/server";

//GET
export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

// POST
export async function POST(request) {
  const payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.email || !payload.age) {
    return NextResponse.json(
      { result: "required filed is not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "New User Created Sucessfully!", success: true },
    { status: 201 }
  );
}
