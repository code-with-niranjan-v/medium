import axios from "axios";
import { use, useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    title: string;
    content: string;
    id: string;
    author: Author;
  }
  
  interface Author {
    name: string;
  }
export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(BACKEND_URL+"/blog/all",{headers:{
            Authorization: localStorage.getItem("token")
        }},).then(res=>{
            setBlogs(res.data.data);
            setLoading(false)
        })
    },[])

    return {
        blogs,
        loading
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/blog/${id}`,{headers:{
            Authorization: localStorage.getItem("token")
        },},).then(res=>{
            setBlog(res.data.data);
            setLoading(false)
        })
    },[id])

    return {
        blog,
        loading
    }
}