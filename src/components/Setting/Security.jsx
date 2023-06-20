import { BiMenuAltRight } from "react-icons/bi";
import { Switch, TextInput, Drawer, Badge } from "@mantine/core";
import { MdAdminPanelSettings, MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { RiShieldStarFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const Security = () => {
  const [checked, setChecked] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

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
                to="/setting/general"
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
                to="/setting/email"
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
                to="/setting/security"
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
      </Drawer>
    <div className=" flex-grow p-[2.5rem] block ">
      <div className=" pb-[2.5rem]">
        <div className="flex justify-between">
          <div>
            <h5 className=" text-[18.4px] text-[#364a63] font-nunito font-bold mb-2">
              Security Settings
            </h5>
            <span className=" text-[14px] text-[#8094ae] font-roboto">
              These settings are helps you keep your account secure.
            </span>
          </div>
          <div className=" text-[#526484] lg:hidden cursor-pointer">
            <button
              onClick={open}
              className=" rounded-full w-10 h-10 transition-all duration-200 text-[#526484] hover:bg-[#e5e9f2] flex items-center justify-center"
            >
              <BiMenuAltRight size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className=" border border-[#dbdfea]">
        <div className=" p-[24px] border-b border-[#dbdfea]">
          <div className="flex items-center gap-10 justify-between">
            <div className=" flex-grow">
              <h6 className=" text-[#364a63] font-nunito  text-[16px] font-bold mb-2">
                Save my Activity Logs
              </h6>
              <p className=" text-[#526484] font-roboto text-[14px]">
                You can save your all activity logs including unusual activity
                detected.
              </p>
            </div>
            <div className="">
              <Switch
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                size="md"
              />
            </div>
          </div>
        </div>

        <div className=" p-[24px] border-b border-[#dbdfea]">
          <div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row gap-5 justify-between">
            <div className=" flex-grow">
              <h6 className=" text-[#364a63] font-nunito  text-[16px] font-bold mb-2">
                Change Password
              </h6>
              <p className=" text-[#526484] font-roboto text-[14px]">
                Set a unique password to protect your account.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <p className=" text-[#8094ae] text-[12px] font-roboto italic">
                Last changed:{" "}
                <span className=" text-[#526484] text-[12px]">Oct 2, 2019</span>
              </p>
              <button className=" bg-[#6576ff] py-[7px] px-[18px] rounded-[5px] text-[13px] text-white font-nunito font-bold transition-all duration-100 hover:bg-[#5664d9]">
                Change Password
              </button>
            </div>
          </div>
        </div>

        <div className=" p-[24px] border-b border-[#dbdfea]">
          <div className="flex flex-col xl:flex-row gap-5 justify-between">
            <div className=" flex-grow">
              <h6 className=" text-[#364a63] font-nunito  text-[16px] font-bold mb-2">
                2 Factor Auth
                <Badge
                  color="teal"
                  radius="sm"
                  variant="filled"
                  className=" capitalize ml-4"
                >
                  Enabled
                </Badge>
              </h6>
              <p className=" text-[#526484] font-roboto text-[14px]">
                Secure your account with 2FA security. When it is activated you
                will need to enter not only your password, but also a special
                code using app. You can receive this code by in mobile app.
              </p>
            </div>
            <div className=" flex items-center">
              <button className=" bg-[#6576ff] py-[7px] px-[18px] rounded-[5px] text-[13px] text-white font-nunito font-bold transition-all duration-100 hover:bg-[#5664d9]">
                Disable
              </button>
            </div>
          </div>
        </div>

        <div className=" p-[24px] border-b border-[#dbdfea]">
          <div className="flex flex-col xl:flex-row gap-5 justify-between">
            <div className=" flex-grow">
              <h6 className=" text-[#364a63] font-nunito  text-[16px] font-bold mb-2">
                Auto Logout
              </h6>
              <p className=" text-[#526484] font-roboto text-[14px]">
                Set a auto logout time to disconnect your account from all
                sessions.
              </p>
            </div>
            <div className=" flex items-center">
              <button className=" bg-[#6576ff] py-[7px] px-[18px] rounded-[5px] text-[13px] text-white font-nunito font-bold transition-all duration-100 hover:bg-[#5664d9]">
                Update
              </button>
            </div>
          </div>
        </div>

        <div className=" p-[24px] border-b border-[#dbdfea]">
          <div className="flex flex-col xl:flex-row gap-5 justify-between">
            <div className=" flex-grow">
              <h6 className=" text-[#364a63] font-nunito  text-[16px] font-bold mb-2">
                Turn on login alerts
                <Badge
                  color="teal"
                  radius="sm"
                  variant="filled"
                  className=" capitalize ml-2"
                >
                  Enabled
                </Badge>
              </h6>
              <p className=" text-[#526484] font-roboto text-[14px]">
                Be notified if anyone logs in account from unknown or new device
              </p>
            </div>
            <div className=" flex items-center">
              <button className=" bg-[#6576ff] py-[7px] px-[18px] rounded-[5px] text-[13px] text-white font-nunito font-bold transition-all duration-100 hover:bg-[#5664d9]">
                Disable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Security;
