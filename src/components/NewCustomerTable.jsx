import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./NewCustomerTable.css";
import { Popover } from "@mantine/core";
import { AiOutlineSetting } from "react-icons/ai";
import { TbNotification } from "react-icons/tb";

const NewCustomerTable = () => {
  return (
    <div className=" my-10 grid md:grid-cols-2 gap-6">
      {/* table one  */}
      <div className=" border rounded shadow-sm">
        <div className=" flex justify-between items-center px-6 py-5 border-b">
          <h4 className=" font-nunito font-[700] text-[#525684] text-[16px]">
            New Customer
          </h4>
          <p className=" text-[14px] text-[#5664d9] font-[500]">View All</p>
        </div>
        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-[#5664d9] bg-[#EBEDFF]">
              AB
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Abu Bin Ishtiyak
              </p>
              <p className=" text-[13px] text-[#8094ae]">info@softnio.com</p>
            </div>
          </div>

          <Popover width={200} trapFocus position="bottom" shadow="md">
            <Popover.Target>
              <div className=" relative three-dot-menu">
                <BsThreeDots className=" text-xl text-gray-700 hover:text-gray-500" />
              </div>
            </Popover.Target>
            <Popover.Dropdown className="rounded py-2 px-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <AiOutlineSetting className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Action Settings</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5  text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <TbNotification className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Push Notification</p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-[#FF63A5] bg-[#FFEBF3]">
              SW
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Sharon Walker
              </p>
              <p className=" text-[13px] text-[#8094ae]">
                sharon-90@example.com
              </p>
            </div>
          </div>

          <Popover width={200} trapFocus position="bottom" shadow="md">
            <Popover.Target>
              <div className=" relative three-dot-menu">
                <BsThreeDots className=" text-xl text-gray-700 hover:text-gray-500" />
              </div>
            </Popover.Target>
            <Popover.Dropdown className="rounded py-2 px-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <AiOutlineSetting className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Action Settings</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5  text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <TbNotification className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Push Notification</p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-[#F4BD0E] bg-[#FEF6E0]">
              GO
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Gloria Oliver
              </p>
              <p className=" text-[13px] text-[#8094ae]">
                gloria_72@example.com
              </p>
            </div>
          </div>

          <Popover width={200} trapFocus position="bottom" shadow="md">
            <Popover.Target>
              <div className=" relative three-dot-menu">
                <BsThreeDots className=" text-xl text-gray-700 hover:text-gray-500" />
              </div>
            </Popover.Target>
            <Popover.Dropdown className="rounded py-2 px-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <AiOutlineSetting className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Action Settings</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5  text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <TbNotification className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Push Notification</p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-[#1EE0AC] bg-[#E2FBF4]">
              PS
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Phillip Sullivan
              </p>
              <p className=" text-[13px] text-[#8094ae]">
                phillip-85@example.com
              </p>
            </div>
          </div>

          <Popover width={200} trapFocus position="bottom" shadow="md">
            <Popover.Target>
              <div className=" relative three-dot-menu">
                <BsThreeDots className=" text-xl text-gray-700 hover:text-gray-500" />
              </div>
            </Popover.Target>
            <Popover.Dropdown className="rounded py-2 px-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <AiOutlineSetting className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Action Settings</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5  text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <TbNotification className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Push Notification</p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-[#E85347] bg-[#FCE9E7]">
              AB
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Tasnim Ifrat
              </p>
              <p className=" text-[13px] text-[#8094ae]">
                tasif-85@example.com
              </p>
            </div>
          </div>

          <Popover width={200} trapFocus position="bottom" shadow="md">
            <Popover.Target>
              <div className=" relative three-dot-menu">
                <BsThreeDots className=" text-xl text-gray-700 hover:text-gray-500" />
              </div>
            </Popover.Target>
            <Popover.Dropdown className="rounded py-2 px-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <AiOutlineSetting className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Action Settings</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5  text-[#526484] hover:text-[#6c76ff] hover:bg-[#e5e9f2] transition duration-500">
                  <TbNotification className=" text-lg" />
                  <p className=" text-[12px] font-[500] ">Push Notification</p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>

      {/* table two  */}

      <div className=" border rounded shadow-sm">
        <div className=" flex justify-between items-center px-6 py-5 border-b">
          <h4 className=" font-nunito font-[700] text-[#525684] text-[16px]">
            Recent Activities
          </h4>
          <div className=" flex items-center gap-4">
            <p className=" text-[14px] text-[#8094ae] cursor-pointer">Cancel</p>
            <p className=" text-[14px] text-gray-500 border-b-2 border-[#5664d9] font-[500] cursor-pointer">
              All
            </p>
          </div>
        </div>
        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10  rounded-full overflow-hidden">
              <img
                src="https://dashlite.net/demo1/images/avatar/c-sm.jpg"
                alt=""
              />
            </div>
            <div>
              <p className=" text-[14px] text-[#525684]">
                Keith Jensen requested for room.
              </p>
              <p className=" text-[13px] text-[#8094ae]">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-white bg-[#F4BD0E]">
              HS
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Harry Simpson placed a Order.
              </p>
              <p className=" text-[13px] text-[#8094ae]">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-white bg-[#5664d9]">
              SM
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Stephanie Marshall cancelled booking.
              </p>
              <p className=" text-[13px] text-[#8094ae]">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 rounded-full overflow-hidden">
              <img
                src="https://dashlite.net/demo1/images/avatar/d-sm.jpg"
                alt=""
              />
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Nicholas Carr confirmed booking.
              </p>
              <p className=" text-[13px] text-[#8094ae]">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-between items-center px-6 py-4 border-b">
          <div className=" flex items-center gap-4">
            <div className=" h-10 w-10 flex items-center justify-center rounded-full text-[14px] font-[500] text-white bg-[#FF63A5]">
              TM
            </div>
            <div>
              <p className=" font-[700] text-[14px] text-[#525684]">
                Timothy Moreno placed a Order.
              </p>
              <p className=" text-[13px] text-[#8094ae]">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerTable;
