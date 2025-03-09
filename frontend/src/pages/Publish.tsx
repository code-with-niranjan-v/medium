import { useState } from "react";
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export function Publish() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const onPublish = async () => {
    if (title && description) {
      const data = {
        title: title,
        content: description,
      };
      const response = await axios.post(`${BACKEND_URL}/blog`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      navigate(`/blog/${response.data.id}`);
    }
  };
  return (
    <>
      <div>
        <AppBar></AppBar>
        <div className="flex flex-col justify-center items-center min-w-screen gap-5">
          <div className="w-5xl">
            <input
              className="w-full p-3"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Title"
              type="text"
            />
          </div>
          <div className="w-5xl">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div>
            <button
              onClick={onPublish}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
