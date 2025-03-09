import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Blogs from "./pages/Blogs.tsx";
import { Blog } from "./pages/Blog.tsx";
import { Publish } from "./pages/Publish.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/blog/:id" element={<Blog></Blog>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/publish" element={<Publish></Publish>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  </StrictMode>
);
