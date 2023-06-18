import React from "react";
import { Pagination, Select } from "@mantine/core";

import { IoChevronDownOutline, IoFilter } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
const Table = ({ children, selectValues }) => {
  // selectValue = ["Value 1","Value 2"]
  return (
    <div className=" border-[#364a63] rounded">
      <div className=" p-5 flex justify-between items-center">
        <div className=" flex items-center gap-4">
          <Select
            placeholder="Bulk Action"
            rightSection={<IoChevronDownOutline size="1rem" />}
            rightSectionWidth={30}
            styles={{
              rightSection: { pointerEvents: "none" },
              root: {
                ":focus-within": {
                  borderColor: "#6576ff",
                  boxShadow: "0 0 0 3px rgba(101,118,255,.1)",
                },
              },

              item: {
                margin: "2px 0",
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: "#E5E9F2",

                    color: "#566A92",
                  },
                },
              },
            }}
            data={selectValues}
            w={160}
          />
          <button
            disabled
            className=" px-[18px] py-[7px] rounded text-sm font-bold font-nunito text-[#A8B1C1] border border-[#dbdfea] bg-[#FAFAFC]"
          >
            Apply
          </button>
        </div>
        <div className=" flex items-center gap-3 text-xl text-[#526484]">
          <div className="border-r border-[#A8B1C1] pr-5 h-8 flex items-center">
            <FiSearch />
          </div>
          <div className=" flex gap-2 ">
            <div className="p-2 transition-all duration-300 hover:bg-[#E5E9F2] hover:rounded-full">
              <IoFilter />
            </div>
            <div className="p-2 transition-all duration-300 hover:bg-[#E5E9F2] hover:rounded-full">
              <TbSettings />
            </div>
          </div>
        </div>
      </div>
      {/* Use Your Table Here */}
      {children}
      {/* Use Your Table Here */}

      <div className="p-5 flex justify-between items-center font-roboto">
        <Pagination
          total={10}
          styles={() => ({
            control: {
              "&[data-active]": {
                backgroundColor: "#ebeef2",
                color: "#6576ff",
              },
              "&[data-active]:not([data-disabled])": {
                ":hover": {
                  backgroundColor: "#ebeef2",
                },
              },
            },
          })}
        />
        <div className=" flex items-center gap-4 text-sm text-[#526484]">
          <span>PAGE</span>
          <Select
            placeholder="1"
            maxDropdownHeight={280}
            rightSection={<IoChevronDownOutline size="1rem" />}
            rightSectionWidth={30}
            styles={{
              rightSection: { pointerEvents: "none" },
              root: {
                ":focus-within": {
                  borderColor: "#6576ff",
                  boxShadow: "0 0 0 3px rgba(101,118,255,.1)",
                },
              },

              item: {
                margin: "2px 0",
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: "#E5E9F2",

                    color: "#566A92",
                  },
                },
              },
            }}
            data={["1", "2", "3"]}
            w={60}
          />
          <span>OF 102</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
