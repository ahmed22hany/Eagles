import { NextRequest, NextResponse } from 'next/server';
import dataJson from './data.json';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();
  const data = dataJson as any;

  if (!id) return NextResponse.error();

  const pageData = data[id];

  return NextResponse.json({ pageData });
}
