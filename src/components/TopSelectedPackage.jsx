import { Popover, Progress, Select } from "@mantine/core";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const TopSelectedPackage = () => {
  return (
    <div className=" border my-10 py-4 px-6 rounded space-y-5 shadow-sm">
      <div className=" flex justify-between items-center">
        <div className=" space-y-2">
          <h1 className=" font-nunito font-[700] text-[#525684]">
            Top Selected Package
          </h1>
          <p className=" text-[13px] text-[#8094ae]">
            In last 30 days top selected package.
          </p>
        </div>
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

      <div className=" space-y-5">
      <div className=" space-y-2">
        <div className=" flex items-center justify-between">
          <h4 className="text-[#8094ae] text-[14px]">Strater Package</h4>
          <p className=" text-[#8094ae] text-[14px]">58%</p>
        </div>
        <Progress radius="xs" color="#6576ff" value={58} className=" h-[6px]" />
      </div>

      <div className=" space-y-2">
        <div className=" flex items-center justify-between">
          <h4 className="text-[#8094ae] text-[14px]">Honeymoon Package</h4>
          <p className=" text-[#8094ae] text-[14px]">43%</p>
        </div>
        <Progress radius="xs" color="#f4bd0e" value={43} className=" h-[6px]" />
      </div>

      <div className=" space-y-2">
        <div className=" flex items-center justify-between">
          <h4 className="text-[#8094ae] text-[14px]">Vacation Package</h4>
          <p className=" text-[#8094ae] text-[14px]">33%</p>
        </div>
        <Progress radius="xs" color="#1676fb" value={33} className=" h-[6px]" />
      </div>

      <div className=" space-y-2">
        <div className=" flex items-center justify-between">
          <h4 className="text-[#8094ae] text-[14px]">Continental Package</h4>
          <p className=" text-[#8094ae] text-[14px]">29%</p>
        </div>
        <Progress radius="xs" color="#ff63a5" value={29} className=" h-[6px]" />
      </div>

      <div className=" space-y-2">
        <div className=" flex items-center justify-between">
          <h4 className="text-[#8094ae] text-[14px]">Spring Package</h4>
          <p className=" text-[#8094ae] text-[14px]">18.49%</p>
        </div>
        <Progress radius="xs" color="#ffa353" value={18.49} className=" h-[6px]" />
      </div>

      <div className=" space-y-2">
        <div className=" flex items-center justify-between">
          <h4 className="text-[#8094ae] text-[14px]">All suite Package</h4>
          <p className=" text-[#8094ae] text-[14px]">16%</p>
        </div>
        <Progress radius="xs" color="#20c997" value={16} className=" h-[6px]" />
      </div>
      </div>
    </div>
  );
};

export default TopSelectedPackage;
