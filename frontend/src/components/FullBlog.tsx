import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Author } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  console.log(blog);
  return (
    <>
      <AppBar></AppBar>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-12 px-10 w-full  ">
          <div className="gap-y-3 col-span-8">
            <div className="font-extrabold text-black text-5xl mb-3">
              {blog.title}
            </div>
            <div className="text-slate-400 mb-3">Published on 10-02-2025</div>
            <div className="text-lg text-black">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div>Author</div>
            <div className="flex gap-2 my-3 justify-start items-center">
              <div>
                <Author size="big" name={blog.author.name}></Author>
              </div>
              <div className="text-black font-bold">{blog.author.name}</div>
            </div>
            <div className="flex justify-center">
              <div>
                Android Developer expert at building scalable and easy maintain
                apps
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
