'use session'
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/login";
import { NextApiRequest } from "next";
import { getUsername } from "@/lib/getUsername";
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Your Username or email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'password'
                }
            },
            async authorize(credentials){
                //if(!credentials?.username || !credentials.password) return null
                if(!credentials) return null
                try{
                    const user = await login(credentials);
                    console.log('user in options',user)
                    return user as any 
                }catch(e){
                    console.error(e)
                    return null
                }
               
            }
        })
    ],
    pages:{
        signIn: '/signin',
        
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        session: async ({session, token}: any)=>{
            
            try{
                session.user.username = await getUsername(parseInt(token.sub))
            }catch(e){
                console.error(e)
                return null
            }
            console.log('session in options:',session)
            return session
        }
    }

}