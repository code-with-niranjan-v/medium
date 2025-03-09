import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/Spinner";
import { useBlogs } from "../hooks";

function Blogs() {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <>
        <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
          <Spinner></Spinner>
        </div>
      </>
    );
  } else {
    console.log(blogs);
  }
  return (
    <>
      <AppBar></AppBar>

      <div className="flex justify-center flex-col items-center gap-2 ">
        {blogs.map((blog, key) => (
          <BlogCard
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate="10-1-2025"
            id={blog.id}
          ></BlogCard>
        ))}
      </div>
    </>
  );
}

export default Blogs;
