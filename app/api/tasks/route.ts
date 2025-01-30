import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "app/_data/db.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const tasks = JSON.parse(fileData).tasks;
  
  return NextResponse.json(tasks);
}
