import {  NextResponse } from "next/server";
import { NextRequest } from 'next/server'

export const protectedRoutes = ['/basket'];
export const authRoutes = ['/signin'];


export function middleware(req: NextRequest){
    const currentUser = req.cookies.get('currentUser')?.value;
    
    //if (protectedRoutes.includes(req.nextUrl.pathname) && (!currentUser || Date.now() > JSON.parse(currentUser).expiresIn))
    if (protectedRoutes.includes(req.nextUrl.pathname) && !currentUser){
        const response = NextResponse.redirect(new URL('/signin', req.url));
        response.cookies.delete('currentUser')

        return response;
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/basket'
}

export async function redirectMiddleware(req:NextRequest) {     // reloads middleware to after signin
    if (authRoutes.includes(req.nextUrl.pathname)){     
        return NextResponse.redirect(req.url)
    }
    return NextResponse.next()
}