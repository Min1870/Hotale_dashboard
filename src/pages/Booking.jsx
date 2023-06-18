import React from "react";
import Table from "../utils/Table";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { Checkbox, Table as ManineTable } from "@mantine/core";
const Booking = () => {
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
          <Checkbox color="violet" size="xs" /> <span>ID</span>
        </div>
      </th>
      <th>Customer</th>
      <th>Package</th>
      <th>Booking</th>
      <th>Room Type</th>
      <th>Arrive</th>
      <th>Payment</th>
      <th>
        <div className=" border w-6 h-6 p-1 rounded flex justify-center items-center">
          <HiOutlinePlus />
        </div>
      </th>
    </tr>
  );

  // Rows
  const rows = elements.map((el) => (
    <tr key={el.id} className=" font-roboto text-sm text-[#8094ae]">
      <td>
        <div className="flex items-center gap-3">
          <Checkbox color="violet" size="xs" />{" "}
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
          <div className="flex flex-col gap-1">
            <h1 className="text-[#364a63] font-medium">{el.name}</h1>
            <p className=" text-xs">{el.email}</p>
          </div>
        </div>
      </td>
      <td>{el.package}</td>
      <td
        className={`${
          el.booking ? "text-teal-400" : "text-yellow-400"
        } font-semibold`}
      >
        {el.booking ? "Active" : "Pending"}
      </td>
      <td>{el.roomType}</td>
      <td>{el.arrive}</td>
      <td
        className={`${
          el.payment ? "text-teal-400" : "text-yellow-400"
        } font-semibold`}
      >
        {el.payment ? "Paid" : "Due"}
      </td>
      <td>
        <div className=" text-xl ml-1">
          <BsThreeDots />
        </div>
      </td>
    </tr>
  ));

  return (
    <div className=" px-[22px] py-8">
      {/* Header */}
      <div className=" flex justify-between items-center mb-7">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Booking Lists
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            You have total 2,595 booking's.
          </h4>
        </div>
        <div className=" flex items-center gap-4">
          <button className=" px-[18px] py-[7px] transition-all duration-500 flex items-center gap-3 border border-[#dbdfea] rounded hover:text-white hover:bg-[#526484]">
            <FiDownloadCloud />
            <span className=" text-sm font-bold font-nunito">Export</span>
          </button>
          <button className="text-lg p-2 rounded text-white bg-[#6576ff] hover:bg-[#5664d9] hover:border-[#6576ff] active:bg-[#515ecc]">
            <HiOutlinePlus />
          </button>
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
  );
};

export default Booking;
