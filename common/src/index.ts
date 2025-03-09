import z from 'zod';

export const SignUpInput = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})

export type SignUpInput = z.infer<typeof SignUpInput>

export const SignInInput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

export type SignInInput = z.infer<typeof SignInInput>


export const createBlogInput = z.object({
    title:z.string(),
    content:z.string()
})

export type createBlogInput  = z.infer<typeof createBlogInput >

export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})

export type updateBlogInput  = z.infer<typeof updateBlogInput >
