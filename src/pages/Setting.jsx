import { BiMenuAltRight } from "react-icons/bi";
import { MdAdminPanelSettings, MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { RiShieldStarFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { Switch, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import General from "../components/Setting/General";
import Email from "../components/Setting/Email";
import "../components/Setting/setting.css";
import Security from "../components/Setting/Security";

const Setting = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldHideLeftSide = windowWidth <= 990;

  const [selectedTab, setSelectedTab] = useState("general");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Drawer
        size={"300px"}
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <div className=" min-w-[300px] min-h-screen bg-white">
          <div className="p-[24px] border-b  border-[#dbdfea]">
            <h3 className="text-[28px] text-[#364a63] font-nunito font-bold mb-2">
              Settings
            </h3>
            <span className=" text-[14px] text-[#526484] font-roboto">
              Here you can change and edit your needs
            </span>
          </div>
          <div className=" py-[12px] ">
            <ul className=" py-[16px] p-[24px]">
              <NavLink
                to={""}
                className="text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
              >
                <div className=" flex items-center gap-3">
                  <MdAdminPanelSettings size={25} />
                  <span className=" font-roboto text-[14px] font-semibold">
                    General
                  </span>
                </div>
                <MdKeyboardArrowRight />
              </NavLink>
            </ul>
            <ul className=" py-[16px] p-[24px]">
              <NavLink
                to={""}
                className="text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
              >
                <div className=" flex items-center gap-3">
                  <IoMdLock size={25} />
                  <span className=" font-roboto text-[14px] font-semibold">
                    E-mail
                  </span>
                </div>
                <MdKeyboardArrowRight />
              </NavLink>
            </ul>
            <ul className=" py-[16px] p-[24px]">
              <NavLink
                to={""}
                className=" text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
              >
                <div className=" flex items-center gap-3">
                  <RiShieldStarFill size={25} />
                  <span className=" font-roboto text-[14px] font-semibold">
                    Security
                  </span>
                </div>
                <MdKeyboardArrowRight />
              </NavLink>
            </ul>
            <ul className=" py-[16px] p-[24px]">
              <NavLink
                to={""}
                className=" text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
              >
                <div className=" flex items-center gap-3">
                  <FiActivity size={25} />
                  <span className=" font-roboto text-[14px] font-semibold">
                    Account Activity
                  </span>
                </div>
                <MdKeyboardArrowRight />
              </NavLink>
            </ul>
          </div>
        </div>
      </Drawer>
      <div className=" bg-[#F5F6FA] py-[32px] px-[22px]">
        <div className="flex rounded-md overflow-hidden border border-[#e5e9f2] shadow-sm">
          {/* Left Side */}
          {!shouldHideLeftSide && (
            <div className=" bg-white min-w-[320px] min-h-screen border-r  border-[#e5e9f2]">
              <div className="p-[24px] border-b border-[#dbdfea]">
                <h3 className="text-[28px] text-[#364a63] font-nunito font-bold mb-2">
                  Settings
                </h3>
                <span className=" text-[14px] text-[#526484] font-roboto">
                  Here you can change and edit your needs
                </span>
              </div>
              <div className=" py-[12px] ">
                <ul className=" py-[16px] p-[24px]">
                  <NavLink
                    to="/setting/general"
                    className=" text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
                    onClick={() => handleTabClick("general")}
                  >
                    <div className=" flex items-center gap-3">
                      <MdAdminPanelSettings size={25} />
                      <span className=" font-roboto text-[14px] font-semibold">
                        General
                      </span>
                    </div>
                    <MdKeyboardArrowRight />
                  </NavLink>
                </ul>
                <ul className=" py-[16px] p-[24px]">
                  <NavLink
                    to="/setting/email"
                    className=" text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
                    onClick={() => handleTabClick("email")}
                  >
                    <div className=" flex items-center gap-3">
                      <IoMdLock size={25} />
                      <span className=" font-roboto text-[14px] font-semibold">
                        E-mail
                      </span>
                    </div>
                    <MdKeyboardArrowRight />
                  </NavLink>
                </ul>
                <ul className=" py-[16px] p-[24px]">
                  <NavLink
                    to="/setting/security"
                    className=" text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
                    onClick={() => handleTabClick("security")}
                  >
                    <div className=" flex items-center gap-3">
                      <RiShieldStarFill size={25} />
                      <span className=" font-roboto text-[14px] font-semibold">
                        Security
                      </span>
                    </div>
                    <MdKeyboardArrowRight />
                  </NavLink>
                </ul>
                <ul className=" py-[16px] p-[24px]">
                  <NavLink
                    to="/setting/activity"
                    className=" text-[#526484] transition duration-200 hover:text-[#6576ff] flex items-center justify-between"
                  >
                    <div className=" flex items-center gap-3">
                      <FiActivity size={25} />
                      <span className=" font-roboto text-[14px] font-semibold">
                        Account Activity
                      </span>
                    </div>
                    <MdKeyboardArrowRight />
                  </NavLink>
                </ul>
              </div>
            </div>
          )}

          {/* Right Side */}
          <div className={`${shouldHideLeftSide ? "w-full" : "flex-1"} bg-white`}>
            <Outlet opened={opened} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
