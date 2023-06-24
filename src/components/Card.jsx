import React from "react";
import { BsArrowDown, BsQuestionCircleFill } from "react-icons/bs";
import BarChart from "./Chart/BarChart";

const Card = ({
  data,
  title,
  rate,
  month,
  monthCount,
  week,
  weekCount,
  decRate,
}) => {
  return (
    <div className="col-span-6 lg:col-span-1 bg-white border border-[#dbdfea] rounded p-5 text-[#364a63] shadow-sm">
      <div className=" flex flex-col gap-1">
        <div className="flex justify-between items-center ">
          <h1 className="font-nunito text-[17px] font-bold ">{title}</h1>
          <BsQuestionCircleFill />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-roboto text-2xl leading-10">{rate}</p>
          <span className="flex items-center gap-1 text-[13px] text-[#e85347] leading-[14px]">
            {decRate && <BsArrowDown />} {decRate}
          </span>
        </div>
        <div className=" flex justify-between items-end">
          <div className="flex lg:items-center lg:gap-5 flex-col gap-3 md:flex-row">
            <div>
              <h1 className="text-[11px] text-[#8094ae] tracking-widest">
                {month}
              </h1>
              <p className=" text-[15px] text-[#364a63]">{monthCount}</p>
            </div>
            <div>
              <h1 className="text-[11px] text-[#8094ae] tracking-widest">
                {week}
              </h1>
              <p className=" text-[15px] text-[#364a63]">{weekCount}</p>
            </div>
          </div>
          <div className=" w-[90px] h-[65px] mt-2">
            <BarChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
