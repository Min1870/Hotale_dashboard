import { BiMenuAltRight } from "react-icons/bi";
import { Switch, TextInput, Drawer } from "@mantine/core";
import { MdAdminPanelSettings, MdKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { RiShieldStarFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";

const General = () => {
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
                General Setting
              </h5>
              <span className=" text-[14px] text-[#8094ae] font-roboto">
                These settings helps you modify site settings.
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
        <form>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Hotel Name
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Specify the name of your hotel.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <TextInput defaultValue={"Dashlite HMS"} />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Hotel Logo
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                The logo of your hotel
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <input
                type="file"
                name="imageInput"
                id="custom-file-input"
                placeholder="Choose File"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Hotel Address
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Specify the name of your hotel address.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <TextInput
                defaultValue={"323  Hinkle Lake Road, Cambridge, Massachusetts"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Copyright
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Copyright information of your Hotel.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <TextInput
                defaultValue={"© 2023, DashLite. All Rights Reserved"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Main Site
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Specify the URL if your main website.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <TextInput defaultValue={"https://www.softnio.com"} />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Facebook
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Specify the URL if your facebook page.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <TextInput defaultValue={"https://www.facebook.com"} />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Instagram
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Specify the URL if your instagram page.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <TextInput defaultValue={"https://www.instagram.com"} />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col mt-4">
              <label
                htmlFor=""
                className=" font-roboto text-[14px] text-[#344357] mb-[8px] font-medium"
              >
                Maintanance Mode
              </label>
              <span className=" text-[12px] text-[#8094ae] italic">
                Enable to make Project make offline.
              </span>
            </div>
            <div className=" flex-grow mt-4">
              <Switch label="Offlline" size="md" color="indigo" />
            </div>
          </div>
          <div className="pt-2 grid grid-cols-1">
            <div className=" mt-4">
              <button className="px-[24px] py-[11px] bg-[#6576ff] transition-all duration-100 hover:bg-[#5664d9] text-white tracking-[0.02em] text-[15px] font-nunito rounded-[5px] font-bold">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default General;
