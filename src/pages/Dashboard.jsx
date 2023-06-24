import React from "react";
import TopSelectedPackage from "../components/TopSelectedPackage";
import NewCustomerTable from "../components/NewCustomerTable";
import { BsCalendar, BsCalendarWeek } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { Popover } from "@mantine/core";
import { TbReportAnalytics } from "react-icons/tb";
import Card from "../components/Card";
import IncomeCard from "../components/IncomeCard";

const Dashboard = () => {
  return (
    <div className=" py-8 md:px-[22px] bg-[#F5F6FA]">
      {/* Header */}
      <div className=" flex justify-between items-center mb-7 px-5 md:p-0">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Dashboard Overview
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            Welcome to Hotale Dashboard.
          </h4>
        </div>
        <div className=" flex items-center gap-4">
          <Popover width={160} position="bottom-end" shadow="lg">
            <Popover.Target>
              <button className="px-3 py-[7px] transition-all duration-500 flex justify-between items-center gap-3 text-[#8094ae] border border-[#dbdfea] rounded hover:text-white hover:bg-[#526484]">
                <BsCalendarWeek />
                <span className=" text-[13px] font-bold font-nunito">
                  Last 30 Days
                </span>
                <FiChevronRight />
              </button>
            </Popover.Target>
            <Popover.Dropdown className="px-0">
              <div className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Last 30 Days
              </div>
              <div className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Last 6 Months
              </div>
              <div className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Last 1 Years
              </div>
            </Popover.Dropdown>
          </Popover>
          <button className="flex items-center gap-3 px-[18px] py-[7px] text-[13px] font-nunito font-semibold rounded text-white bg-[#6576ff] hover:bg-[#5664d9] hover:border-[#6576ff] active:bg-[#515ecc]">
            <TbReportAnalytics className="text-lg" />
            Reports
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-12 gap-5">
        <Card />
        <Card />
        <Card />
      </div>
      <TopSelectedPackage />
      <IncomeCard />
      <NewCustomerTable />
    </div>
  );
};

export default Dashboard;
