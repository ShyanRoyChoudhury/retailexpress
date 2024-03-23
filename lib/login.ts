import prisma from '../db/index'
import bcrypt from 'bcryptjs';

export const login = async ({ username, password }: { username: string, password: string})=> {
    const user = await prisma.user.findUnique({
        where:{
            username,
        }
    })
    if(!user){
        throw new Error('Username not found');
    }else{
        let valid = await bcrypt.compare(password, user.password)
        if(!valid){
            throw new Error('Invalid password')
        }
        return user
    }
}