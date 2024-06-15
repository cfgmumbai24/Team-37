import React, { useEffect, useState } from "react";
import { getBlogs } from "../../services/apiBlogs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  console.log(blogs);

  useEffect(function () {
    getBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <section class="w-screen py-20 mt-10">
      <h1 class="mb-12 text-center font-sans text-5xl font-bold">Our Blog</h1>
      <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {blogs.map((blog) => {
          return (
            <>
              <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
                <img
                  class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                  src={blog.image}
                  alt="blog"
                />

                <div class="py-1 px-6 mt-2">
                  <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                    {blog.title}
                  </h1>
                  <p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                    {blog.content}
                  </p>
                </div>
                
                <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                  <div class="flex flex-wrap text-sm text-gray-500">
                    <span class="mr-1">{formatDate(blog.created_at)}</span>
                  </div>
                  <div>
                    <ArrowForwardIcon />
                  </div>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
