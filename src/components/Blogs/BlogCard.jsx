import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const BlogCard = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-white border border-gray-100 shadow">
      <div className="relative">
        <div className=" inline-block border-2 overflow-hidden relative group">
          <img
            className="group-hover:scale-110 transition-all duration-300"
            src="https://plus.unsplash.com/premium_photo-1675756583672-04a27dfe1f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
        </div>
      </div>
      <div className=" p-5">
        <div>
          <div className=" text-[#4c4c4c] text-[13px] font-bold mb-[4px]">
            Dec 17, 2021
          </div>
          <div>
            <h3 className="mb-[20px] text-[27px] text-[#262626] font-bold transition duration-200 hover:text-[#656565]">
              Cities To Visit For Your First Time In Europe
            </h3>
          </div>
        </div>
        <div>
          <p className=" text-[#656565] mb-5 text-[17px]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind...
          </p>
        </div>
        <div className=" hover-underline-animation_blog gap-3 text-[17px] cursor-pointer  items-center py-2 font-normal transition duration-200 hover:text-[#656565] text-[#212121] focus:ring-4 focus:outline-none">
          Preview
          <MdArrowRightAlt size={20} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
