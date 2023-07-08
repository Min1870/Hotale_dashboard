import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillSetting, AiFillDashboard, AiFillCalendar } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaCoins, FaLayerGroup } from "react-icons/fa";
import {
  BsHouseDoorFill,
  BsPencilSquare,
  BsBoxArrowRight,
} from "react-icons/bs";
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
        className={`sticky h-screen ${
          openedSidebar && "sidebar-close"
        } bg-black text-gray-400 select-none w-[300px] transition-all duration-500 max-xl:hidden sidebar top-0 font-nunito`}
      >
        <div>
          <div className="sticky top-0 z-50 flex items-center gap-5 h-[67px] px-6 border-b border-gray-700">
            <div
              onClick={toggle}
              className=" relative sidebar-menu text-3xl cursor-pointer "
            >
              <IoIosMenu />
            </div>

            <div className=" w-[117px] logo-container">
              <NavLink to={`/`} className="focus-visible:outline-none">
                <img className="" src={logoWhite} alt="" />
              </NavLink>
            </div>
          </div>

          <ScrollArea h={500} scrollbarSize={8} scrollHideDelay={500}>
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
                    <div className="flex items-center gap-3 text-2xl  hover:text-white">
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
                          className={` side-menu flex items-center gap-3 text-2xl text-gray-400  hover:text-white`}
                        >
                          <AiFillCalendar />
                          <span className=" list-text text-[15px] font-[700]">
                            Bookings
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-gray-400 booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/booking`}
                              className="side-menu hover:text-white text-[14px]"
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
                              className="side-menu hover:text-white text-[14px]"
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
                              className="side-menu hover:text-white text-[14px]"
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
                  <Accordion className="">
                    <Accordion.Item value="photos">
                      <Accordion.Control>
                        {/* <NavLink to={'/'} className="side-menu"> */}
                        <div
                          className={` side-menu flex items-center gap-3 text-2xl text-gray-400  hover:text-white`}
                        >
                          <BsHouseDoorFill />
                          <span className=" list-text text-[15px] font-[700]">
                            Room
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-gray-400 booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/rooms`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">All Rooms</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/room-add`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Add Room</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/customers`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-white">
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
                    <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                      <HiUsers />
                      <span className="list-text text-[15px] font-[700]">
                        Payment
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
                          className={` side-menu flex items-center gap-3 text-2xl text-gray-400  hover:text-white`}
                        >
                          <BsPencilSquare />
                          <span className=" list-text text-[15px] font-[700]">
                            Blog
                          </span>
                        </div>
                        {/* </NavLink> */}
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className=" text-gray-400 booking-list space-y-3">
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/blogs`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">All Blogs</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => {
                                close();
                              }}
                              to={`/blog-add`}
                              className="side-menu hover:text-white text-[14px]"
                            >
                              <span className="">Add Blog</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </li>

                <li className="list-item">
                  <NavLink
                    to={`/setting/general`}
                    className="side-menu"
                    onClick={() => {
                      close();
                    }}
                  >
                    <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                      <AiFillSetting />
                      <span className="list-text text-[15px] font-[700]">
                        Setting
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
