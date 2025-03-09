import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";

export function Blog() {
  const { id } = useParams();
  console.log(id);
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <>
        <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
          <Spinner></Spinner>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <FullBlog blog={blog}></FullBlog>
      </div>
    </>
  );
}
