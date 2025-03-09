import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { signinInput, signupInput } from '@100xdevs/medium-common'
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
    JWT_SECRET:string
    }
}>()


userRouter.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
    const body = await c.req.json();

    

   try{
    const user = await prisma.user.create({
      data:{
        name:body.name,
        email:body.email,
        password:body.password
      }
    })
  
    const token = await sign({id:user.id,name:user.name},c.env.JWT_SECRET)
    return(c.json({token}))
   }catch(e){
    return(c.json({"error":"Error while Sign Up"}))
   }
  
    
  })
  
  userRouter.post('/signin',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
    const body = await c.req.json();

    
    try{
      const user = await prisma.user.findUnique({
        where:{
          email:body.email,
          password:body.password
        }
      })
      if(!user){
        return(c.json({"error":"User does not exist"}));
      }
      const token = await sign({id:user.id,name:user.name},c.env.JWT_SECRET)
      return(c.json({token}))
    }catch(e){
      return(c.json({error:"error While Sign in"}))
    }
  })