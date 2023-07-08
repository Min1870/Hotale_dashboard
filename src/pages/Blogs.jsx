import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/Blogs/BlogCard";

const Blogs = () => {
  const nav = useNavigate();
  return (
    <div className="px-0 md:px-[22px] py-8 bg-[#F5F6FA]">
      {/* Header */}
      <div className=" flex justify-between items-center mb-7 px-5 md:p-0 relative">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Blogs
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            You have total 3 blogs.
          </h4>
        </div>
        <div>
          <button
            onClick={() => nav("/blog-add")}
            className="text-lg p-2 rounded text-white bg-[#000] hover:bg-[#2a2a2a] hover:border-[#000] active:bg-[#898989]"
          >
            <HiOutlinePlus />
          </button>
        </div>
      </div>

      <div>
        <div className=" grid grid-cols-12 gap-5 px-5 md:p-0">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
