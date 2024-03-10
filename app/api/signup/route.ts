import prisma from "@/db";
import bcrypt from 'bcrypt';
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
        return NextResponse.redirect('/signin')
    }else{
        return NextResponse.json({
            error: 'username already exists'
        })

    }
}