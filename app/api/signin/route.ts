import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@/db";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import Cookies from "js-cookie";

const secret = process.env.SECRET_KEY as string;

export async function POST(req: NextRequest){
    const { username, password } = await req.json();
    const user = await prisma.user.findUnique({
        where:{
            username,
        }
    })
    if(!user){
        return NextResponse.json({error: 'Username not'});
    }else{
        let valid = await bcrypt.compare(password, user.password)
        if(!valid){
            return NextResponse.json({error: 'Invalid password'})
        }
        let token = jwt.sign({userId: user.id}, secret, {expiresIn: '5h'})
        
        let responseData = {
            //token,
            redirectURL: new URL('/', req.url),
            userName: user.username
        }
        //Cookies.set('currentUser', token)
        cookies().set('currentUser', token);
        return NextResponse.json(responseData);
    }
}