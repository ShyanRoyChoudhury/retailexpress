import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import Cookies from "js-cookie";
const secret= process.env.SECRET_KEY as unknown as jwt.Secret;
import prisma from "@/db";
import { headers } from "next/headers";

import { cookies } from 'next/headers'; // Import cookies

export async function GET(req: NextRequest){
    
    const headersList = headers();
    const authToken = headersList.get("authorization");
    const token = authToken?.split(' ')[1];
    if(token && secret)
    try {
        const payload = jwt.verify(token, secret) as JwtPayload;
        const userId = payload.userId;

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            return NextResponse.error();
        }

        return NextResponse.json({
            username: user.username
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.error();
    }
}
