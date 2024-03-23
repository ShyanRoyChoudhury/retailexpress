import prisma from '../db/index'

export const getUsername = async (id: number) => {
    
    const user = await prisma.user.findUnique({
        where:{
            id
        }
    })
    if(!user){
        throw new Error('username not in db')
    }
    return user.username    
}