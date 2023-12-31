import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  MdOutlineLibraryBooks,
  MdKeyboardArrowDown,
  MdSpaceDashboard,
} from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiFillSetting,
  AiFillDashboard,
  AiFillCalendar,
} from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { BiBell, BiLeftArrowAlt } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { FaCoins, FaLayerGroup } from "react-icons/fa";
import {
  BsActivity,
  BsBoxArrowRight,
  BsArrowReturnRight,
  BsArrowReturnLeft,
  BsHouseDoorFill,
  BsPencilSquare,
} from "react-icons/bs";
import "./Header.css";
import { Accordion, Drawer, Popover, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/contact";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/services/authSlice";
import Cookies from "js-cookie";

import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.png";

const Header = () => {
  const [openedDrawer, { open, close }] = useDisclosure(false);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const user = JSON.parse(Cookies.get("user"));

  const logoutHandler = async () => {
    const { data } = await logout(token);
    dispatch(removeUser());
    console.log(data);
    if (data?.success) {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className=" py-4 px-2 md:px-8  flex items-center justify-between sticky z-50 bg-white top-0 shadow-sm">
        {/* left desktop */}
        <div className=" max-xl:hidden flex items-center justify-start gap-3">
          <div className=" cursor-pointer text-gray-500 text-2xl">
            <MdOutlineLibraryBooks />
          </div>
          <p className=" text-[13px] text-[#526484] font-[500]">
            Do you know the latest update of 2022?{" "}
            <span className=" text-[13px] text-[#8094ae]">
              A overview of our is now available on YouTube...
            </span>
          </p>
          <div className=" text-[#8094ae] hover:text-[#6c76ff] cursor-pointer text-sm">
            <FiExternalLink />
          </div>
        </div>
        {/* left mobile and tablet */}
        <div className=" xl:hidden flex items-center gap-4 md:gap-8">
          <div
            onClick={open}
            className=" relative nav-menu text-3xl text-gray-500 cursor-pointer"
          >
            <IoIosMenu />
          </div>
          <NavLink to={`/`}>
            <div className=" w-[117px]">
              <img src={logoDark} alt="" />
            </div>
          </NavLink>
        </div>
        {/* right  */}
        <div className=" flex items-center gap-5  justify-end">
          <div>
            <Popover width={170} trapFocus position="bottom-end" shadow="md">
              <Popover.Target>
                <div className=" max-sm:hidden cursor-pointer relative us-flag">
                  <img
                    src="https://dashlite.net/demo1/images/flags/english-sq.png"
                    className=" rounded-full w-[24px]"
                    alt=""
                  />
                </div>
              </Popover.Target>
              <Popover.Dropdown className=" border-0 border-t-2 border-[#6c76ff] rounded mt-2 p-0">
                <div className="">
                  <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                    <img
                      src="https://dashlite.net/demo1/images/flags/english.png"
                      alt=""
                      className=" w-[24px]"
                    />
                    <p className=" text-[13px] text-[#526484]">English</p>
                  </div>
                  <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                    <img
                      src="https://dashlite.net/demo1/images/flags/spanish.png"
                      alt=""
                      className=" w-[24px]"
                    />
                    <p className=" text-[13px] text-[#526484]">Espanol</p>
                  </div>
                  <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                    <img
                      src="https://dashlite.net/demo1/images/flags/french.png"
                      alt=""
                      className=" w-[24px]"
                    />
                    <p className=" text-[13px] text-[#526484]">Francais</p>
                  </div>
                  <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                    <img
                      src="https://dashlite.net/demo1/images/flags/turkey.png"
                      alt=""
                      className=" w-[24px]"
                    />
                    <p className=" text-[13px] text-[#526484]">Turkce</p>
                  </div>
                </div>
              </Popover.Dropdown>
            </Popover>
          </div>

          <div>
            <Popover width={275} trapFocus position="bottom-end" shadow="md">
              <Popover.Target>
                <div className=" flex items-center gap-3 cursor-pointer select-none">
                  <div className="  w-fit p-2 bg-gray-500 text-white text-sm rounded-full cursor-pointer">
                    <AiOutlineUser />
                  </div>
                  <div className=" max-md:hidden">
                    <div className=" text-[11px] font-[500] text-gray-500">
                      Administrator
                    </div>
                    <div className=" text-[12px] font-[500] text-[#526484] flex items-center gap-1">
                      {user?.name}
                      <span className=" text-lg">
                        <MdKeyboardArrowDown />
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Target>
              <Popover.Dropdown className=" border-0 border-t-2 border-gray-500 rounded mt-2 p-0">
                <div className="">
                  <div className=" flex items-center gap-3 bg-[#e5e9f2] border-b px-8 py-5">
                    <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-gray-500 text-white text-sm font-[500]">
                      {user.name.split("")[0].toUpperCase()}
                    </div>
                    <div>
                      <p className=" text-[13px] text-[#526484] font-[500]">
                        {user?.name}
                      </p>
                      <p className=" text-[12px] text-[#8094ae]">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className=" px-8 py-5 space-y-5 border-b">
                    <div className="">
                      <div className=" cursor-pointer flex items-center gap-3  text-[#526484] font-[500] hover:text-gray-700">
                        <AiOutlineUser />
                        <span className=" text-[13px]">View Profile</span>
                      </div>
                    </div>

                    <div className="">
                      <Link
                        to={`/setting/general`}
                        className=" focus-visible:outline-none cursor-pointer flex items-center gap-3  text-[#526484] font-[500] hover:text-gray-700"
                      >
                        <AiOutlineSetting />
                        <span className=" text-[13px]">Account Setting</span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        className=" focus-visible:outline-none cursor-pointer flex items-center gap-3  text-[#526484] font-[500] hover:text-gray-700"
                        to={`/setting/activity`}
                      >
                        <BsActivity />
                        <span className=" text-[13px]">Login Activity</span>
                      </Link>
                    </div>
                  </div>

                  <div
                    onClick={logoutHandler}
                    className=" cursor-pointer px-8 py-5 flex items-center gap-3  text-[#526484] font-[500] hover:text-gray-700"
                  >
                    <BsBoxArrowRight />
                    <span className=" text-[13px]">sign out</span>
                  </div>
                </div>
              </Popover.Dropdown>
            </Popover>
          </div>

          <Popover width={350} trapFocus position="bottom-end" shadow="md">
            <Popover.Target>
              <div className=" cursor-pointer bell relative">
                <BiBell className=" text-xl" />
                <span className="w-1 h-1 rounded-full bg-green-300"></span>
              </div>
            </Popover.Target>
            <Popover.Dropdown className=" border-0 border-t-2 border-gray-500 rounded mt-2 p-0">
              <div className="">
                <div className="  px-8 py-4 border-b flex items-center justify-between">
                  <p className=" text-[13px] text-[#526484]">Notification</p>
                  <p className=" text-[13px] text-gray-500 cursor-pointer">
                    Mark All As Read
                  </p>
                </div>
                <div>
                  <div className="  px-8 py-4 border-b flex items-center gap-3">
                    <div className=" p-3 bg-yellow-50 rounded-full text-[#f4bd0e] w-fit">
                      <BsArrowReturnRight />
                    </div>
                    <div>
                      <p className=" text-[13px] text-[#526484]">
                        You have requested to Widthdrawl
                      </p>
                      <p className=" text-[11px] text-[#8094ae]">2hr ago</p>
                    </div>
                  </div>
                  <div className="  px-8 py-4 border-b flex items-center gap-3">
                    <div className=" p-3 bg-green-50 rounded-full text-[#1ee0ac] w-fit">
                      <BsArrowReturnLeft />
                    </div>
                    <div>
                      <p className=" text-[13px] text-[#526484]">
                        Your Deposit Order is placed
                      </p>
                      <p className=" text-[11px] text-[#8094ae]">2hr ago</p>
                    </div>
                  </div>
                  <div className="  px-8 py-4 border-b flex items-center gap-3">
                    <div className=" p-3 bg-yellow-50 rounded-full text-[#f4bd0e] w-fit">
                      <BsArrowReturnRight />
                    </div>
                    <div>
                      <p className=" text-[13px] text-[#526484]">
                        You have requested to Widthdrawl
                      </p>
                      <p className=" text-[11px] text-[#8094ae]">2hr ago</p>
                    </div>
                  </div>
                </div>
                <div className="  px-8 py-4 text-center cursor-pointer text-[13px] text-gray-500">
                  View All
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </nav>
      <Drawer
        opened={openedDrawer}
        onClose={close}
        withCloseButton={false}
        size={300}
        transitionProps={{
          transition: "slide-right",
          duration: 500,
          timingFunction: "easeInOut",
        }}
        className=" "
      >
        <div className=" font-nunito bg-black text-gray-400 min-h-screen">
          <div className=" sticky top-0 z-50 flex items-center gap-5 py-4 px-6 border-b border-gray-700">
            <div
              onClick={close}
              className=" relative nav-arrow text-3xl cursor-pointer text-[#9faec2]"
            >
              <BiLeftArrowAlt />
            </div>

            <div className=" w-[117px] ">
              <NavLink to={`/`} className="focus-visible:outline-none">
                <img className="" src={logoWhite} alt="" />
              </NavLink>
            </div>
          </div>

          <div>
            <ul className=" drawer-body py-8 px-6 space-y-5">
              <li className="">
                <NavLink to={`/`} className="side-menu" onClick={close}>
                  <div className="flex items-center gap-3 text-2xl  hover:text-white">
                    <MdSpaceDashboard />
                    <span className="text-[15px] font-[700]">Dashboard</span>
                  </div>
                </NavLink>
              </li>

              <li>
                <Accordion className="">
                  <Accordion.Item value="photos">
                    <Accordion.Control>
                      <div className=" flex items-center gap-3 text-2xl text-gray-400  hover:text-white">
                        <AiFillCalendar />
                        <span className="text-[15px] font-[700]">Bookings</span>
                      </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <ul className=" space-y-3">
                        <li>
                          <NavLink
                            onClick={close}
                            to={`/booking`}
                            className="side-menu text-gray-400 hover:text-white text-[14px]"
                          >
                            All Bookings
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={close}
                            to={`/booking-add`}
                            className="side-menu text-gray-400 hover:text-white text-[14px]"
                          >
                            Add Booking
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={close}
                            to={`/booking-edit`}
                            className="side-menu text-gray-400 hover:text-white text-[14px]"
                          >
                            Edit Booking
                          </NavLink>
                        </li>
                      </ul>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </li>

              <li>
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

              <li>
                <NavLink
                  to={`/customers`}
                  className="side-menu"
                  onClick={close}
                >
                  <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                    <FaCoins />
                    <span className="text-[15px] font-[700]">Customers</span>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/invoice-list`}
                  className="side-menu"
                  onClick={close}
                >
                  <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                    <HiUsers />
                    <span className="text-[15px] font-[700]">Payment</span>
                  </div>
                </NavLink>
              </li>
              <li>
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
              <li>
                <NavLink
                  to={`/setting/general`}
                  className="side-menu"
                  onClick={close}
                >
                  <div className=" flex items-center gap-3 text-2xl  hover:text-white">
                    <AiFillSetting />
                    <span className="text-[15px] font-[700]">Setting</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
