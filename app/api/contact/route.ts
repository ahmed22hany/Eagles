import type { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    console.log('Data', req.body);

    // res.status(200).json({ name: 'John Doe' })
}