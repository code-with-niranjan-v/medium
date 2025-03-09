import { Link } from "react-router-dom";
import { Author } from "./BlogCard";

export function AppBar() {
  return (
    <>
      <div className="flex justify-between px-10 py-4">
        <Link to={"/blogs"}>
          <div className="font-bold flex flex-col items-center justify-center">
            EchoWrite
          </div>
        </Link>
        <div>
          <Link to={"/publish"}>
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              New
            </button>
          </Link>
          <Author size="big" name="testing"></Author>
        </div>
      </div>
    </>
  );
}
