import { Popover } from "@mantine/core";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import RoomBookingChart from "./Chart/RoomBookingChart";

const RoomBookingCard = () => {
  return (
    <div className=" bg-white border border-[#dbdfea] rounded p-5 text-[#364a63]">
      <div className=" flex items-center justify-between">
        <h1 className="font-nunito text-[17px] font-bold ">Room Booking Chart</h1>
        <div>
          <Popover width={120} trapFocus position="bottom-end" shadow="md">
            <Popover.Target>
              <button className=" font-nunito font-[700] text-[#525684] hover:bg-[#525684] focus:bg-gray-200 focus:text-[#525684] hover:text-white flex items-center gap-2 border px-3 py-[6px] rounded text-xs">
                30 Days
                <IoChevronDownOutline />
              </button>
            </Popover.Target>
            <Popover.Dropdown className="rounded py-2 px-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[12px] font-[500] text-[#526484] hover:text-[#6c76ff]">
                    7 Days
                  </p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[12px] font-[500] text-[#526484] hover:text-[#6c76ff]">
                    15 Days
                  </p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[12px] font-[500] text-[#526484] hover:text-[#6c76ff]">
                    30 Days
                  </p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
      <div className=" mt-10 mx-auto w-[160px] h-[160px]">
        <RoomBookingChart/>
      </div>


      <div className=" mt-10 grid grid-cols-2 ml-10 gap-5">
        <div className=" flex gap-2">
            <div className=" h-[12px] w-[12px] rounded-[3px] bg-[#9CABFF]"></div>
            <div className=" -mt-[4px]">
                <p className="  text-[13px] text-[#8094ae] mb-1">Single</p>
                <p className=" text-[18px]">1913 <span className="   text-[13px] text-[#8094ae]">58.63%</span></p>
            </div>
        </div>

        <div className=" flex gap-2">
            <div className=" h-[12px] w-[12px] rounded-[3px] bg-[#1EE0AC]"></div>
            <div className=" -mt-[4px]">
                <p className="  text-[13px] text-[#8094ae] mb-1">Double</p>
                <p className=" text-[18px]">859 <span className="   text-[13px] text-[#8094ae]">23.94%</span></p>
            </div>
        </div>

        <div className=" flex gap-2">
            <div className=" h-[12px] w-[12px] rounded-[3px] bg-[#F9DB7B]"></div>
            <div className=" -mt-[4px]">
                <p className="  text-[13px] text-[#8094ae] mb-1">Delux</p>
                <p className=" text-[18px]">482 <span className="   text-[13px] text-[#8094ae]">12.94%</span></p>
            </div>
        </div>

        <div className=" flex gap-2">
            <div className=" h-[12px] w-[12px] rounded-[3px] bg-[#FFA353]"></div>
            <div className=" -mt-[4px]">
                <p className="  text-[13px] text-[#8094ae] mb-1">Suit</p>
                <p className=" text-[18px]">138 <span className="   text-[13px] text-[#8094ae]">4.49%</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingCard;
