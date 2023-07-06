import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import Table from "../utils/Table";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import { LuVerified } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Checkbox, Table as ManineTable, Popover } from "@mantine/core";
import { Menu, Button, Text, Modal, Group } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import AddCustomersModal from "../components/Customers/AddCustomersModal";
import { RiEdit2Fill } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";

const Customers = () => {
  const colors = {
    Diamond: "#1F2B3A",
    Sliver: "#6576FF",
    Platinum: "#FFA353",
    Gold: "#F4BD0E",
    Default: "#8094AE",
  };

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  // Rows Data
  const elements = [
    {
      id: "AB-357",
      name: "Abu Bin Ishtiyak",
      email: "info@softnio.com",
      package: "Continental",
      verified: "Email",
      phone: "+811 847-4958",
      lastCheckout: "10 Feb 2020",
      group: "Diamond",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "AB-753",
      name: "Ashley Lawson",
      email: "ashley@softnio.com",
      package: "Single",
      verified: "Email",
      phone: "+124 394-1787",
      lastCheckout: "07 Feb 2021",
      group: "Sliver",
      img: "https://dashlite.net/demo1/images/avatar/a-sm.jpg",
    },
    {
      id: "AB-159",
      name: "Micheal Murphy",
      email: "info@softnio.com",
      package: "All Suit",
      verified: "Email",
      phone: "+811 569-6523",
      lastCheckout: "10 Jan 2021",
      group: "Platinum",
      img: "https://dashlite.net/demo1/images/avatar/b-sm.jpg",
    },
    {
      id: "AB-169",
      name: "Eliana Stout",
      email: "Eliana@softnio.com",
      package: "Vacation",
      verified: "Email",
      phone: "+124 394-1787",
      lastCheckout: "07 Feb 2021",
      group: "Gold",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "AB-179",
      name: "Luukas Haapala",
      email: "Luukas@softnio.com",
      package: "Honeymoon",
      verified: "Email",
      phone: "+811 569-6523",
      lastCheckout: "02 May 2021",
      group: "Basic",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "AB-189",
      name: "Azul Baldwin",
      email: "Azul@softnio.com",
      package: "Vacation",
      verified: "Email",
      phone: "+124 156-8756",
      lastCheckout: "	07 Jan 2021",
      group: "Gold",
      img: "https://dashlite.net/demo1/images/avatar/c-sm.jpg",
    },
    {
      id: "AB-199",
      name: "Dasia Lovell",
      email: "Dasia@softnio.com",
      package: "Continental",
      verified: "Email",
      phone: "+811 569-6523",
      lastCheckout: "10 Feb 2020",
      group: "Diamond",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "AB-299",
      name: "Novalee Spicer",
      email: "Novalee@softnio.com",
      package: "Strater",
      verified: "Email",
      phone: "+124 394-1787",
      lastCheckout: "	07 Feb 2021",
      group: "Sliver",
      img: "https://dashlite.net/demo1/images/avatar/d-sm.jpg",
    },
    {
      id: "AB-399",
      name: "Cielo Luna",
      email: "Cielo@softnio.com",
      package: "All Suit",
      verified: "Email",
      phone: "+811 569-6523",
      lastCheckout: "10 Jan 2021",
      group: "Platinum",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "AB-499",
      name: "Mikiyah Yeager",
      email: "Mikiyah@softnio.com",
      package: "Honeymoon",
      verified: "Email",
      phone: "+811 569-6523",
      lastCheckout: "02 May 2021",
      group: "Basic",
      img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  // Table Header
  const ths = (
    <tr>
      <th>
        <div className="flex items-center gap-3">
          <Checkbox color="dark" size="xs" /> <span>User</span>
        </div>
      </th>
      <th className=" hidden sm:table-cell">Last Package</th>
      <th className=" hidden md:table-cell">Phone</th>
      <th className=" hidden xl:table-cell">Verified</th>
      <th className=" hidden xl:table-cell">Last Checkout</th>

      <th className=" hidden sm:table-cell">Group</th>
      <th className=" flex justify-end">
      <div className=" border w-6 h-6 p-1 rounded flex justify-center items-center">
          <Popover width={200} position="bottom-end" withArrow shadow="md">
            <Popover.Target>
              <button>
                <HiOutlinePlus />
              </button>
            </Popover.Target>
            <Popover.Dropdown>
              <div className="flex gap-2 items-center mb-3">
                <Checkbox color="dark" size="xs" />
                <span className="text-[13px] font-[400]">Booked</span>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <Checkbox color="dark" size="xs" />
                <span className="text-[13px] font-[400]">Open</span>
              </div>
              <div className="flex gap-2 items-center">
                <Checkbox color="dark" size="xs" />
                <span className="text-[13px] font-[400]">Inactive</span>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </th>
    </tr>
  );

  // Rows
  const rows = elements.map((el) => (
    <tr key={el.id} className=" font-roboto group text-sm text-[#8094ae]">
      <td>
        <div className="flex items-center gap-3">
          <Checkbox color="dark" size="xs" />{" "}
          {/* <span className=" text-[#6576ff]"></span> */}
          <div className="flex items-center gap-3">
            <img
              src={el.img}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 w-[200px]">
              <h1 className="text-[#364a63] font-medium">{el.name}</h1>
              <p className=" text-xs">{el.email}</p>
            </div>
          </div>
        </div>
      </td>
      <td className=" hidden sm:table-cell">{el.package}</td>

      <td className=" hidden md:table-cell">{el.phone}</td>

      <td className=" hidden xl:table-cell">
        <div className=" flex items-center gap-2 ">
          <LuVerified className=" text-teal-400" />
          {el.verified}
        </div>
      </td>

      <td className=" hidden xl:table-cell">{el.lastCheckout}</td>
      <td className=" hidden sm:table-cell" style={{ color: colors[el.group] }}>
        {el.group}
      </td>

      <td>
        <div className=" flex justify-between items-center text-xl ml-1">
          <MdEmail
            size={18}
            className=" transition-all opacity-0 group-hover:opacity-100 -ml-10  text-gray-500"
          />
          <Popover width={150} position="bottom-end" shadow="lg">
            <Popover.Target>
              <div className=" text-xl text-[#526483] ml-1 relative dots z-20 flex justify-center items-center">
                <BsThreeDots />
              </div>
            </Popover.Target>
            <Popover.Dropdown className=" flex flex-col py-3 px-0">
              <div className="select-none text-sm font-medium p-2 pl-3 flex items-center gap-2 transition-all duration-500 hover:text-black hover:bg-slate-100">
                <RiEdit2Fill className="text-lg" />
                Edit
              </div>
              <div className="select-none text-sm font-medium p-2 pl-3 flex items-center gap-2 transition-all duration-500 hover:text-black hover:bg-slate-100">
                <BsTrash className="text-lg" />
                Delete
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </td>
    </tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add Customers"
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
        size="50%"
        centered
      >
        <AddCustomersModal onClose={close} />
      </Modal>
      <div className=" font-nunito py-[24px] md:px-[22px] bg-[#f5f6fa]">
        <div className=" w-full px-[7px]">
          <div>
            <div className=" pb-[28px]">
              <div className=" flex items-center justify-between">
                <div className="">
                  <h3 className=" text-[24px] md:text-[28px] font-bold text-[#363a63] tracking-tight mb-[8px]">
                    Customer's Lists
                  </h3>
                  <div>
                    <p className=" text-[#8094ae] text-[14px] font-roboto">
                      You have total 2,595 customer's.
                    </p>
                  </div>
                </div>
                <div className="">
                  <Popover position="bottom-end" shadow="lg">
                    <Popover.Target>
                      <div className="flex md:hidden w-8 h-8 border rounded border-[#dbdfea] bg-white shadow-sm p-1 justify-center items-center">
                        <CgMenuRightAlt className="text-xl" />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown className="px-0">
                      <div className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                        Export Customer
                      </div>
                      <div
                        onClick={open}
                        className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]"
                      >
                        Add Customers
                      </div>
                      <div className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                        Import Customers
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                  <div className="items-center gap-4 hidden sm:flex">
                    <button className="py-[7px] px-[18px] bg-[#ffffff] border transition-all duration-500 border-[#dbdfea] rounded flex items-center hover:text-white hover:bg-black">
                      <FiDownloadCloud className="" size={18} />
                      <span className="font-bold text-[13px] font-nunito tracking-[0.32px]  pl-[8px] ml-[4px]">
                        Export
                      </span>
                    </button>
                    <Menu
                      offset={2}
                      position="bottom-end"
                      shadow="md"
                      width={180}
                    >
                      <Menu.Target>
                        <button className="text-lg p-2 rounded text-white bg-black hover:bg-black/80 hover:border-black/80 active:bg-black/70">
                          <HiOutlinePlus />
                        </button>
                      </Menu.Target>

                      <Menu.Dropdown className=" py-2">
                        <Group position="center">
                          <Menu.Item
                            onClick={open}
                            className=" py-[10px] hover:text-[#000] px-[20px] text-[#526484] text-[12px] font-medium"
                          >
                            Add Customers
                          </Menu.Item>
                        </Group>
                        <Menu.Item className=" py-[10px] hover:text-[#000] px-[20px] text-[#526484] text-[12px] font-medium">
                          Import Customers
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <Table selectValues={["Send Email", "Delete Booking"]}>
          <ManineTable
            horizontalSpacing="lg"
            verticalSpacing="lg"
            highlightOnHover
            className=" cursor-pointer"
          >
            <thead>{ths}</thead>
            <tbody>{rows}</tbody>
          </ManineTable>
        </Table>
      </div>
    </>
  );
};

export default Customers;
