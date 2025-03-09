import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) {
  return (
    <>
      <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4 w-screen max-w-md cursor-pointer">
          <div className="flex gap-1">
            <div className="flex flex-col justify-center ">
              <Author name={authorName}></Author>
            </div>
            <div className="font-extralight  text-sm">{authorName}</div>
            <div className="flex justify-center items-end flex-col">
              <Circle></Circle>
            </div>
            <div className="text-slate-500 font-thin">{publishedDate}</div>
          </div>
          <div className="pb-2 text-xl font-semibold">{title}</div>
          <div className="pb-2 text-md font-thin">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="pb-2 text-slate-400 text-sm font-thin">
            {Math.ceil(content.length / 100) + " minutes"}
          </div>
        </div>
      </Link>
    </>
  );
}

function Circle() {
  return (
    <>
      <div className="h-1 w-1 rounded-full bg-slate-200"></div>
    </>
  );
}

export function Author({
  name,
  size = "small",
}: {
  name: string;
  size?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`text-${
          size == "small" ? "xs" : "md"
        } text-gray-600 dark:text-gray-300 `}
      >
        {name[0]}
      </span>
    </div>
  );
}
