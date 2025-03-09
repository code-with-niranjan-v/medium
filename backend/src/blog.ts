import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createBlogInput, CreateBlogInput,updateBlogInput } from '@100xdevs/medium-common'
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
    JWT_SECRET:string
    },
    Variables:{
      userId:string
    }
}>()

blogRouter.use('/*',async(c,next)=>{
  const header = c.req.header("Authorization")||" ";

  const jwt = await verify(header,c.env.JWT_SECRET)
    //@ts-ignore
  if(jwt.id){
    
    c.set("userId",jwt.id as string);
    await next()
  }else{
    c.status(403)
    return(c.json({error:"UnAuthorized"}))
  }
})

blogRouter.post('/',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const body = await c.req.json();

        
    const authorId = await c.get("userId");
    const blog = await prisma.post.create({
      data:{
        content:body.content,
        title:body.title,
        authorId: authorId  
      }
    })
    return(c.json({status:"Successfully Added",id:blog.id}))
  }catch(e){
    return(c.json({error:"Error While Adding the Article"}))
  }
    
  })
  
blogRouter.put('/',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const body = await c.req.json();

        
    await prisma.post.update({
      where:{
        id:body.id
      },
      data:{
        content:body.content,
        title:body.title,
  
      }
    })
    return(c.json({status:"Successfully Updated",}))
  }catch(e){
    return(c.json({error:"Error While Updating the Article"}))
  }
  })

  blogRouter.get('/all',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const data = await prisma.post.findMany({
        select:{
          id:true,
          content:true,
          title:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });
      return(c.json({status:"Successfull",data:data}))
    }catch(e){
      return(c.json({error:"Error While Fecthing the Article"}))
    }
    })
  
blogRouter.get('/:id',async(c)=>{
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
   
    const data = await prisma.post.findFirst({
      where: {
          id: id
      },
      select: {
          id: true,
          title: true,
          content: true,
          author: {
              select: {
                  name: true
              }
          }
      }
  })
    return(c.json({status:"Successfull",data:data}))
  }catch(e:any){
    return(c.json({error:"Error While Fecthing the Article "+e.message+" "+id}))
  }
  })

