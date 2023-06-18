import React from "react";
import Table from "../utils/Table";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
const Booking = () => {
  return (
    <div className=" px-[22px] py-8">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Booking Lists
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            You have total 2,595 booking's.
          </h4>
        </div>
        <div className=" flex items-center gap-4">
          <button className=" px-[18px] py-[7px] transition-all duration-500 flex items-center gap-3 border border-[#dbdfea] rounded hover:text-white hover:bg-[#526484]">
            <FiDownloadCloud />
            <span className=" text-sm font-bold font-nunito">Export</span>
          </button>
          <button className="text-lg p-2 rounded text-white bg-[#6576ff] hover:bg-[#5664d9] hover:border-[#6576ff] active:bg-[#515ecc]">
            <HiOutlinePlus />
          </button>
        </div>
      </div>
      <Table selectValues={["Send Email", "Delete Booking"]}>
        <h1 className="text-4xl">Hello</h1>
      </Table>
    </div>
  );
};

export default Booking;
