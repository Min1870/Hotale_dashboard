import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillSetting, AiFillDashboard, AiFillCalendar } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaCoins, FaLayerGroup } from "react-icons/fa";
import { BsHouseDoorFill, BsPencilSquare, BsBoxArrowRight } from "react-icons/bs";
import "./Sidebar.css";
import { Accordion, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../assets/logo-white.png";

const Sidebar = () => {
  const [openedSidebar, { open, close, toggle }] = useDisclosure(false);

  return (
    <>
      <div
        className={`sticky h-fit ${
          openedSidebar && "sidebar-close"
        } select-none w-[300px] transition-all duration-500 max-xl:hidden sidebar top-0 font-nunito`}
      >
        <div>
          <div className="sticky top-0 z-50 bg-[#101924] flex items-center gap-5 h-[67px] px-6 border-b border-gray-700">
            <div
              onClick={toggle}
              className=" relative sidebar-menu text-3xl cursor-pointer text-[#9faec2]"
            >
              <IoIosMenu />
            </div>

            <div className=" w-[117px] logo-container">
              <NavLink to={`/`} className="focus-visible:outline-none">
                <img className="" src={logoWhite} alt="" />
              </NavLink>
            </div>
          </div>

          <ScrollArea h={500}  scrollbarSize={8} scrollHideDelay={500}>
            <div className=" w-[300px] sidebar-body">
              <ul className="py-8 px-6 space-y-5 list-group">
                <li className="list-item">
                  <NavLink
                    to={`/`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className="flex items-center gap-3 text-2xl  hover:text-[#7f8dff]">
                      <MdSpaceDashboard />
                      <span className=" list-text text-[15px] font-[700]">
                        Dashboard
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="list-item">
                  <Accordion className="">
                    <Accordion.Item value="photos">
                      <Accordion.Control>
                        {/* <NavLink to={'/'} className="side-menu"> */}
                        <div
                          className={` side-menu flex items-center gap-3 text-2xl text-[#6e82a5]  hover:text-[#7f8dff]`}
                        >
                          <AiFillCalendar />
                          <span className=" list-text text-[15px] font-[700]">
                            Bookings
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/booking`}
                              className="side-menu hover:text-[#7f8dff] text-[14px]"
                            >
                              <span className="">All Bookings</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/booking-add`}
                              className="side-menu hover:text-[#7f8dff] text-[14px]"
                            >
                              <span className="">Add Booking</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/booking-edit`}
                              className="side-menu hover:text-[#7f8dff] text-[14px]"
                            >
                              <span className="">Edit Booking</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/rooms`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-[#7f8dff]">
                      <BsHouseDoorFill />
                      <span className="list-text text-[15px] font-[700]">
                        Room
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/customers`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-[#7f8dff]">
                      <FaCoins />
                      <span className="list-text text-[15px] font-[700]">
                        Customers
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/invoice-list`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-[#7f8dff]">
                      <HiUsers />
                      <span className="list-text text-[15px] font-[700]">
                        Payment
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/setting/general`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-[#7f8dff]">
                      <AiFillSetting />
                      <span className="list-text text-[15px] font-[700]">
                        Setting
                      </span>
                    </div>
                  </NavLink>
                </li>

               
              </ul>

              {/* <div className="">
                <div className=" h-[25px] flex items-center">
                  {openedSidebar && (
                    <div className=" w-full h-[1px] bg-gray-700"></div>
                  )}
                  {!openedSidebar && (
                    <h4 className=" mx-6 return uppercase text-[12px] text-[#9faec2] font-[700]">
                      Return to
                    </h4>
                  )}
                </div>
                <ul className=" py-4 px-6 space-y-5">
                  <li className="list-item">
                    <Link className="side-menu">
                      <div className="flex items-center gap-3 text-2xl  hover:text-[#7f8dff]">
                        <AiFillDashboard />
                        <span className="list-text text-[15px] font-[700]">
                          Main Dashboard
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link className="side-menu">
                      <div className="flex items-center gap-3 text-xl  hover:text-[#7f8dff]">
                        <FaLayerGroup />
                        <span className="list-text text-[15px] font-[700]">
                          All Components
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
