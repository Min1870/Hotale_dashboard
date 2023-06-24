import React from "react";
import { BsArrowDown, BsArrowUp, BsQuestionCircleFill } from "react-icons/bs";
import SaleRevenueChart from "./Chart/SaleRevenueChart";

const SaleRevenueCard = () => {
  return (
    <div className=" bg-white border border-[#dbdfea] rounded p-5 text-[#364a63]">
      <div className="">
        <div className="flex justify-between items-center ">
          <h1 className="font-nunito text-[17px] font-bold ">Total Booking</h1>
          <BsQuestionCircleFill />
        </div>
        <p className=" text-[13px] text-[#8094ae]">In last 30 days revenue from rent.</p>
        <div className=" mt-8 grid grid-cols-3">
            <div>
                <p className=" text-[12px] font-[500] text-gray-400">Monthly</p>
                <p className=" text-[24px] text-[#364a63]">9.28K</p>
                <div className=" text-[13px] text-[#20c997] flex items-center font-[500]"><BsArrowUp/> 4.63%</div>
            </div>
            <div>
                <p className=" text-[12px] font-[500] text-gray-400">Weekly</p>
                <p className=" text-[24px] text-[#364a63]">2.69K</p>
                <div className=" text-[13px] text-red-500 flex items-center font-[500]"><BsArrowDown/> 1.92%</div>
            </div>
            <div>
                <p className=" text-[12px] font-[500] text-gray-400">Daily(Avg)</p>
                <p className=" text-[24px] text-[#364a63]">0.94K</p>
                <div className=" text-[13px] text-[#20c997] flex items-center font-[500]"><BsArrowUp/> 3.45%</div>
            </div>
        </div>
        <div className=" mt-10 w-full h-[150px] overflow-hidden">
            <SaleRevenueChart />
          </div>
          <div className=" mt-2  text-[13px] text-[#8094ae] flex justify-between">
            <p>01 Jan, 2020</p>
            <p>30 Jan, 2020</p>
          </div>
      </div>
    </div>
  )
}

export default SaleRevenueCard