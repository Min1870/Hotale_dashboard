import React from "react";
import Table from "../utils/Table";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Checkbox, Table as ManineTable, Popover } from "@mantine/core";
import "../utils/Table.css";
import { useNavigate } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
const Booking = () => {
  const nav = useNavigate();
  // Rows Data
  const elements = [
    {
      id: "AB-357",
      name: "Abu Bin Ishtiyak",
      email: "info@softnio.com",
      package: "Continental",
      booking: true,
      roomType: "Super Delux",
      arrive: "10 Feb 2020",
      payment: true,
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "AB-753",
      name: "Ashley Lawson",
      email: "ashley@softnio.com",
      package: "Single",
      booking: true,
      roomType: "Super Delux",
      arrive: "11 Jan 2021",
      payment: true,
      img: "https://dashlite.net/demo1/images/avatar/a-sm.jpg",
    },
    {
      id: "AB-159",
      name: "Micheal Murphy",
      email: "info@softnio.com",
      package: "All Suit",
      booking: false,
      roomType: "Super Delux",
      arrive: "10 Feb 2020",
      payment: false,
      img: "https://dashlite.net/demo1/images/avatar/b-sm.jpg",
    },
  ];

  // Table Header
  const ths = (
    <tr>
      <th>
        <div className="flex items-center gap-3">
          <Checkbox color="dark" size="xs" /> <span>ID</span>
        </div>
      </th>
      <th>Customer</th>
      <th className="hidden md:table-cell">Package</th>
      <th className=" hidden md:table-cell">Booking</th>
      <th className=" hidden md:table-cell truncate">Room Type</th>
      <th className=" hidden md:table-cell">Arrive</th>
      <th className=" hidden md:table-cell">Payment</th>
      <th className="flex justify-center">
        <Popover width={120} shadow="lg" position="bottom-end">
          <Popover.Target>
            <div className=" border w-6 h-6 p-1 rounded flex justify-center items-center cursor-pointer hover:bg-slate-200">
              <HiOutlinePlus />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <div className="flex items-center gap-3 ">
              <Checkbox color="dark" size="xs" id="booking" />
              <label
                htmlFor="booking"
                className=" font-medium text-[#526484] leading-[18px] text-[12px] select-none cursor-pointer"
              >
                Booking
              </label>
            </div>
            <div className="flex items-center gap-3  my-3">
              <Checkbox color="dark" size="xs" id="phone" />
              <label
                htmlFor="phone"
                className=" font-medium text-[#526484] leading-[18px] text-[12px] select-none cursor-pointer"
              >
                Phone
              </label>
            </div>
            <div className="flex items-center gap-3 ">
              <Checkbox color="dark" size="xs" id="payment" />
              <label
                htmlFor="payment"
                className=" font-medium text-[#526484] leading-[18px] text-[12px] select-none cursor-pointer"
              >
                Payment
              </label>
            </div>
          </Popover.Dropdown>
        </Popover>
      </th>
    </tr>
  );

  // Rows
  const rows = elements.map((el) => (
    <tr key={el.id} className=" font-roboto text-[#8094ae]">
      <td>
        <div className="flex items-center gap-3">
          <Checkbox color="dark" size="xs" />{" "}
          <span className=" text-[#6576ff]">{el.id}</span>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <img
            src={el.img}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 w-[170px] md:w-[130px]">
            <h1 className="text-[#364a63] font-medium">{el.name}</h1>
            <p className=" text-xs">{el.email}</p>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">{el.package}</td>
      <td
        className={`${
          el.booking ? "text-teal-400" : "text-yellow-400"
        } font-semibold hidden md:table-cell`}
      >
        {el.booking ? "Active" : "Pending"}
      </td>
      <td className=" hidden md:table-cell">{el.roomType}</td>
      <td className=" hidden md:table-cell">{el.arrive}</td>
      <td
        className={`${
          el.payment ? "text-teal-400" : "text-yellow-400"
        } font-semibold hidden md:table-cell`}
      >
        {el.payment ? "Paid" : "Due"}
      </td>
      <td>
        <Popover width={150} position="bottom-end" shadow="lg">
          <Popover.Target>
            <div className=" text-xl text-[#526483] ml-1 relative dots z-20 flex justify-center items-center">
              <BsThreeDots />
            </div>
          </Popover.Target>
          <Popover.Dropdown className=" flex flex-col py-3 px-0">
            <div className="select-none text-sm font-medium p-2 pl-3 flex items-center gap-2 transition-all duration-500 hover:text-[#000] hover:bg-slate-100">
              <MdEmail className="text-lg" />
              Send Email
            </div>
            <div className="select-none text-sm font-medium p-2 pl-3 flex items-center gap-2 transition-all duration-500 hover:text-[#000] hover:bg-slate-100">
              <RiEdit2Fill className="text-lg" />
              Edit
            </div>
          </Popover.Dropdown>
        </Popover>
      </td>
    </tr>
  ));

  return (
    <div className="px-0 md:px-[22px] py-8 bg-[#F5F6FA]">
      {/* Header */}
      <div className=" flex justify-between items-center mb-7 px-5 md:p-0 relative">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Booking Lists
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            You have total 2,595 booking's.
          </h4>
        </div>
        <div className=" md:flex items-center gap-4 hidden">
          <button className=" px-[18px] py-[7px] transition-all duration-500 flex items-center gap-3 border border-[#dbdfea] rounded hover:text-white hover:bg-[#526484]">
            <FiDownloadCloud />
            <span className=" text-sm font-bold font-nunito">Export</span>
          </button>
          <Popover width={160} position="bottom-end">
            <Popover.Target>
              <button className="text-lg p-2 rounded text-white bg-[#000] hover:bg-[#2a2a2a] hover:border-[#000] active:bg-[#898989]">
                <HiOutlinePlus />
              </button>
            </Popover.Target>
            <Popover.Dropdown className="px-0">
              <div
                onClick={() => nav("/booking-add")}
                className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]"
              >
                Add Booking
              </div>
              <div className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Import Booking
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
        {/* mobile */}
        <Popover position="bottom-end" shadow="lg">
          <Popover.Target>
            <div className="flex md:hidden w-8 h-8 border rounded border-[#dbdfea] bg-white shadow-sm p-1 justify-center items-center">
              <CgMenuRightAlt className="text-xl" />
            </div>
          </Popover.Target>
          <Popover.Dropdown className="px-0">
            <div className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
              Export
            </div>
            <div
              onClick={() => nav("/booking-add")}
              className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]"
            >
              Add Booking
            </div>
            <div className="select-none hover:text-[#000] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
              Import Booking
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>
      {/* Table */}
      <Table selectValues={["Send Email", "Delete Booking"]}>
        <ManineTable
          horizontalSpacing="lg"
          verticalSpacing="lg"
          highlightOnHover
        >
          <thead>{ths}</thead>
          <tbody className=" cursor-pointer">{rows}</tbody>
        </ManineTable>
      </Table>
    </div>
  );
};

export default Booking;
