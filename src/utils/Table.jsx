import React, { useState } from "react";
import {
  Badge,
  CheckIcon,
  Checkbox,
  Grid,
  Pagination,
  Popover,
  Select,
} from "@mantine/core";
import { IoChevronDownOutline, IoFilter } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { TbSettings } from "react-icons/tb";
import "./Table.css";
import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";

const Table = ({ children, selectValues }) => {
  const [searchShow, setSearchShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  // selectValue = ["Value 1","Value 2"]
  return (
    <div className="border border-[#dbdfea] rounded">
      <div className=" p-5 border-b  relative">
        {/* mobile search */}
        <div
          className={`w-full flex items-center gap-2 transition-all duration-300 py-2 ${
            searchShow ? "flex" : "hidden"
          }`}
        >
          <BsArrowLeft
            className="text-xl"
            onClick={() => setSearchShow(!searchShow)}
          />
          <input
            type="text"
            autoFocus
            placeholder="Search by user or email"
            className="flex-1 outline-none pl-3 text-sm"
          />
          <FiSearch
            onClick={() => setSearchShow(!searchShow)}
            className="text-xl text-[#526484] cursor-pointer hover:text-[#7f8dff]"
          />
        </div>
        <div
          className={` justify-between items-center transition-all duration-300 ${
            searchShow ? "hidden" : "flex"
          }`}
        >
          <div className=" flex items-center gap-3">
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

          <div
            className={`w-full h-full flex justify-between items-center gap-2 transition-all duration-300 py-2 absolute left-0 px-5 bg-white z-20 ${
              mobileMenu ? "flex" : "hidden"
            }`}
          >
            <BsArrowLeft
              className="text-xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
            <div className=" flex items-center gap-2 text-xl text-[#526484]">
              <Popover width={350} position="bottom-end" shadow="lg">
                <Popover.Target>
                  <div className="filter p-2 relative cursor-pointer">
                    <IoFilter />
                  </div>
                </Popover.Target>
                <Popover.Dropdown className="px-0">
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center border-b pb-3 px-5">
                      <h1 className="text-[13px]">Filter Bookings</h1>
                      <BsThreeDots />
                    </div>
                    <div className="px-5 flex flex-col items-start gap-3">
                      <div className="flex items-center gap-2">
                        <Checkbox color="violet" id="email" />
                        <label htmlFor="email" className="text-[13px]">
                          Email Verified
                        </label>
                      </div>
                      <div>
                        <Grid>
                          <Grid.Col span={6}>
                            <Select
                              label="STATUS"
                              placeholder="Any Status"
                              rightSection={
                                <IoChevronDownOutline size="1rem" />
                              }
                              rightSectionWidth={30}
                              styles={{
                                rightSection: { pointerEvents: "none" },

                                label: {
                                  fontSize: "11px",
                                  color: "#8094ae",
                                  fontWeight: "700",
                                  letterSpacing: "2px",
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
                              data={["Paid", "Due"]}
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Select
                              label="ROOM TYPE"
                              placeholder="Any Type"
                              rightSection={
                                <IoChevronDownOutline size="1rem" />
                              }
                              rightSectionWidth={30}
                              styles={{
                                rightSection: { pointerEvents: "none" },
                                label: {
                                  fontSize: "11px",
                                  color: "#8094ae",
                                  fontWeight: "700",
                                  letterSpacing: "2px",
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
                              data={[
                                "Single",
                                "Double",
                                "Dulex",
                                "Super Dulex",
                              ]}
                            />
                          </Grid.Col>
                        </Grid>
                      </div>
                      <button className="text-[13px] text-white font-bold bg-[#364a63] px-[18px] py-1 rounded hover:bg-[#2e3f54]">
                        Filter
                      </button>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3 px-5">
                      <h1 className="text-[13px] text-[#7f8dff] cursor-pointer">
                        Reset Filter
                      </h1>
                      <h1 className="text-[13px] text-[#7f8dff] cursor-pointer">
                        Save Filter
                      </h1>
                    </div>
                  </div>
                </Popover.Dropdown>
              </Popover>
              <Popover width={200} position="bottom-end" shadow="lg">
                <Popover.Target>
                  <div className="setting p-2 relative cursor-pointer">
                    <TbSettings />
                  </div>
                </Popover.Target>
                <Popover.Dropdown className="px-0">
                  <div className="text-[#364a63] text-sm">
                    <div className="border-b pb-3 mb-3">
                      <h1 className="text-sm font-bold px-5">SHOW</h1>
                      <ul className=" flex flex-col gap-2 mt-3 cursor-pointer">
                        <li className="table-li flex justify-between items-center">
                          10 <IoIosCheckmark className="text-xl" />
                        </li>
                        <li className="table-li">20</li>
                        <li className="table-li">50</li>
                      </ul>
                    </div>
                    <div className="">
                      <h1 className="font-bold px-5">ORDER</h1>
                      <ul className=" flex flex-col gap-2 mt-3 cursor-pointer">
                        <li className="table-li flex justify-between items-center">
                          DESC <IoIosCheckmark className="text-xl" />
                        </li>
                        <li className="table-li">ASC</li>
                      </ul>
                    </div>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </div>
          </div>

          {/* Laptop menu */}
          <div className="flex items-center gap-3 text-xl text-[#526484]">
            <div
              className="border-r border-[#A8B1C1] pr-5 h-8 flex items-center cursor-pointer"
              onClick={() => setSearchShow(!searchShow)}
            >
              <FiSearch />
            </div>

            {/* mobile menu */}
            <div className={`flex md:hidden ${mobileMenu ? "hidden" : "flex"}`}>
              <CgMenuRightAlt
                className=" text-2xl"
                onClick={() => setMobileMenu(!mobileMenu)}
              />
            </div>

            {/* Laptop menu */}
            <div className="hidden md:flex gap-2">
              <Popover width={350} position="bottom-end" shadow="lg">
                <Popover.Target>
                  <div className="filter p-2 relative cursor-pointer">
                    <IoFilter />
                  </div>
                </Popover.Target>
                <Popover.Dropdown className="px-0">
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center border-b pb-3 px-5">
                      <h1 className="text-[13px]">Filter Bookings</h1>
                      <BsThreeDots />
                    </div>
                    <div className="px-5 flex flex-col items-start gap-3">
                      <div className="flex items-center gap-2">
                        <Checkbox color="violet" id="email" />
                        <label htmlFor="email" className="text-[13px]">
                          Email Verified
                        </label>
                      </div>
                      <div>
                        <Grid>
                          <Grid.Col span={6}>
                            <Select
                              label="STATUS"
                              placeholder="Any Status"
                              rightSection={
                                <IoChevronDownOutline size="1rem" />
                              }
                              rightSectionWidth={30}
                              styles={{
                                rightSection: { pointerEvents: "none" },

                                label: {
                                  fontSize: "11px",
                                  color: "#8094ae",
                                  fontWeight: "700",
                                  letterSpacing: "2px",
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
                              data={["Paid", "Due"]}
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Select
                              label="ROOM TYPE"
                              placeholder="Any Type"
                              rightSection={
                                <IoChevronDownOutline size="1rem" />
                              }
                              rightSectionWidth={30}
                              styles={{
                                rightSection: { pointerEvents: "none" },
                                label: {
                                  fontSize: "11px",
                                  color: "#8094ae",
                                  fontWeight: "700",
                                  letterSpacing: "2px",
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
                              data={[
                                "Single",
                                "Double",
                                "Dulex",
                                "Super Dulex",
                              ]}
                            />
                          </Grid.Col>
                        </Grid>
                      </div>
                      <button className="text-[13px] text-white font-bold bg-[#364a63] px-[18px] py-1 rounded hover:bg-[#2e3f54]">
                        Filter
                      </button>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3 px-5">
                      <h1 className="text-[13px] text-[#7f8dff] cursor-pointer">
                        Reset Filter
                      </h1>
                      <h1 className="text-[13px] text-[#7f8dff] cursor-pointer">
                        Save Filter
                      </h1>
                    </div>
                  </div>
                </Popover.Dropdown>
              </Popover>
              <Popover width={200} position="bottom-end" shadow="lg">
                <Popover.Target>
                  <div className="setting p-2 relative cursor-pointer">
                    <TbSettings />
                  </div>
                </Popover.Target>
                <Popover.Dropdown className="px-0">
                  <div className="text-[#364a63] text-sm">
                    <div className="border-b pb-3 mb-3">
                      <h1 className="text-sm font-bold px-5">SHOW</h1>
                      <ul className=" flex flex-col gap-2 mt-3 cursor-pointer">
                        <li className="table-li flex justify-between items-center">
                          10 <IoIosCheckmark className="text-xl" />
                        </li>
                        <li className="table-li">20</li>
                        <li className="table-li">50</li>
                      </ul>
                    </div>
                    <div className="">
                      <h1 className="font-bold px-5">ORDER</h1>
                      <ul className=" flex flex-col gap-2 mt-3 cursor-pointer">
                        <li className="table-li flex justify-between items-center">
                          DESC <IoIosCheckmark className="text-xl" />
                        </li>
                        <li className="table-li">ASC</li>
                      </ul>
                    </div>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      {/* Use Your Table Here */}
      {children}
      {/* Use Your Table Here */}

      <div className="p-5 flex justify-between items-center font-roboto border-t flex-col md:flex-row gap-4 md:gap-0">
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
