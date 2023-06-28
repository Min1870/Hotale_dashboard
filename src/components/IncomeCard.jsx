import { Button } from "@mantine/core";
import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import LineChart from "./Chart/LineChart";

const IncomeCard = () => {
  return (
    <div className="p-5 bg-white border rounded my-5 shadow-sm">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-nunito font-bold text-[17px] text-[#364a63]">
              Income Vs Expenses
            </h1>
            <p className="font-roboto text-[12px] text-[#8094ae]">
              How was your income and Expenses this month.
            </p>
          </div>
          <div className="hidden md:flex">
            <Button.Group>
              <Button
                variant="default"
                className=" h-8 font-roboto text-[12px] text-[#526484]"
              >
                7 D
              </Button>
              <Button
                variant="default"
                className=" h-8 font-roboto text-[12px] text-[#526484]"
              >
                1 M
              </Button>
              <Button
                variant="default"
                className=" h-8 font-roboto text-[12px] text-[#526484]"
              >
                3 M
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="grid grid-cols-10">
          <div className="col-span-5 md:col-span-2">
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-[12px] text-[#6576ff]">
                Income
              </h5>
              <div>
                <h1 className="text-2xl text-[#364a63]">2.57K</h1>
                <p className=" text-[12px] text-[#e85347] flex items-center gap-1">
                  <BsArrowDown className="" />
                  12.37%
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2">
            <div className="flex flex-col gap-2">
              <h5 className=" font-medium text-[12px] text-[#e85347]">
                Expenses
              </h5>
              <div>
                <h1 className="text-2xl text-[#364a63]">3.5K</h1>
                <p className=" text-[12px] text-[#e85347] flex items-center gap-1">
                  <BsArrowUp className="" />
                  8.37%
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="w-[98%]">

          <LineChart />
          <div className="flex justify-between items-center text-[12px] text-[#8094ae] pl-10">
            <p>01 Jan, 2020</p>
            <p>30 Jan, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
