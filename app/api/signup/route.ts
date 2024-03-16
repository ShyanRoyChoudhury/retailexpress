import prisma from "@/db";
import bcrypt from 'bcrypt';
import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const { username, password } = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            username
        }
    })
    console.log(user)
    if(!user){
        let hashPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data:{
                username,
                password: hashPassword
            }
        })
        const response = {
            redirectURL: new URL('/signin', req.url)
        }
        return NextResponse.json(response)
    }else{
        return NextResponse.json({
            error: 'username already exists'
        })

    }
}