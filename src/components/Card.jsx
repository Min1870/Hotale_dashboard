import React from "react";
import { BsArrowDown, BsQuestionCircleFill } from "react-icons/bs";
import BarChart from "./Chart/BarChart";

const Card = () => {
  return (
    <div className="col-span-4 bg-white border border-[#dbdfea] rounded p-5 text-[#364a63]">
      <div className=" flex flex-col gap-1">
        <div className="flex justify-between items-center ">
          <h1 className="font-nunito text-[17px] font-bold ">Total Booking</h1>
          <BsQuestionCircleFill />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-roboto text-2xl leading-10">11,230</p>
          <span className="flex items-center gap-1 text-[13px] text-[#e85347] leading-[14px]">
            <BsArrowDown /> 1.93%
          </span>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[11px] text-[#8094ae] tracking-widest">
              THIS MONTH
            </h1>
            <p className=" text-[15px] text-[#364a63]">1913</p>
          </div>
          <div>
            <h1 className="text-[11px] text-[#8094ae] tracking-widest">
              THIS WEEK
            </h1>
            <p className=" text-[15px] text-[#364a63]">1125</p>
          </div>
          <div className="w-[100px] h-[50px] overflow-hidden">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
