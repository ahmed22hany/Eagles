import { NextRequest, NextResponse } from 'next/server';
import { data } from './data.js';

const pages = data as unknown as Record<string, DataObject>;

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();

  if (!id) return NextResponse.error();

  const pageData = pages?.[id];

  return NextResponse.json(pageData);
}

export type DataObject = {
  title: string;
  description: string;
  productImage: { source: string }[];
  liveImages: { source: string }[];
  sliderImages: string[];
  infoText: { title: string; desc: string | string[] }[];
};
