import { Modal, Popover, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import "./Footer.css";

const Footer = () => {
  const [openedModal, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className="py-4 px-2 md:px-8 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between shadow-sm bg-white">
        {/* left  */}
        <div className=" text-[13px] text-[#8094ae]">
          © 2023 DashLite. Template by Softnio
        </div>
        {/* right  */}
        <div className=" flex items-center gap-10">
          <Popover width={150} trapFocus position="top-end" shadow="md">
            <Popover.Target>
              <div className=" flex items-center gap-2  text-[13px] text-[#6c76ff] hover:text-[#5664D9] cursor-pointer">
                English{" "}
                <span>
                  <MdKeyboardArrowUp />
                </span>{" "}
              </div>
            </Popover.Target>
            <Popover.Dropdown className=" rounded mt-2 p-0">
              <div className="">
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[13px] text-[#526484]">English</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[13px] text-[#526484]">Espanol</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[13px] text-[#526484]">Francais</p>
                </div>
                <div className=" cursor-pointer flex items-center gap-3  py-3 px-5 border-b hover:bg-[#e5e9f2] transition duration-500">
                  <p className=" text-[13px] text-[#526484]">Turkce</p>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
          <div
            onClick={open}
            className=" flex items-center gap-2  text-[13px] text-[#6c76ff] hover:text-[#5664D9] cursor-pointer"
          >
            <span className=" text-lg">
              <TbWorld />
            </span>
            Select Region
          </div>
        </div>
      </div>

      <Modal
        opened={openedModal}
        onClose={close}
        centered
        withCloseButton={false}
        transitionProps={{ transition: "fade", duration: 500 }}
        size={800}
      >
        <ScrollArea scrollbarSize={8} scrollHideDelay={500}>
          <div className=" px-10 py-6 space-y-5">
            <div className=" flex items-center justify-between">
              <div className=" font-nunito  text-[18px] text-[#526484] font-[700]">
                Select Your Country
              </div>
              <div onClick={close} className=" text-gray-500 cursor-pointer">
                <RxCross2 />
              </div>
            </div>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/arg.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Argentina</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/aus.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Australia</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/bangladesh.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Bangladesh</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/canada.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Canada(English)</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/china.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Centrafricaine</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/china.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">China</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/french.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">France</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/germany.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Germany</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/iran.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Iran</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/italy.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Italy</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/mexico.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Mexico</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/philipine.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Philippines</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/portugal.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Portugal</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/s-africa.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">South Africa</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/spanish.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Spain</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/switzerland.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">Switzerland</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/uk.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">United Kingdom</p>
              </div>

              <div className=" cursor-pointer flex items-center gap-3 ">
                <img
                  src="https://dashlite.net/demo1/images/flags/english.png"
                  alt=""
                  className=" w-[24px]"
                />
                <p className=" text-[16px] text-[#526484]">United State</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </Modal>
    </>
  );
};

export default Footer;
