import React from "react";
import Table from "../utils/Table";
import { FiDownloadCloud } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { Checkbox, Table as ManineTable } from "@mantine/core";
const Booking = () => {
  const elements = [
    {
      id: "AB-357",
      name: "Abu Bin Ishtiyak",
      email: "info@softnio.com",
      package: "Continental",
      booking: true,
      roomType: "Super Delux",
      arrive: "10 Feb 2020",
      payment: false,
    },
    {
      id: "AB-753",
      name: "Abu Bin Ishtiyak",
      email: "info@softnio.com",
      package: "Continental",
      booking: true,
      roomType: "Super Delux",
      arrive: "10 Feb 2020",
      payment: true,
    },
    {
      id: "AB-159",
      name: "Abu Bin Ishtiyak",
      email: "info@softnio.com",
      package: "Continental",
      booking: false,
      roomType: "Super Delux",
      arrive: "10 Feb 2020",
      payment: false,
    },
  ];
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
  const rows = elements.map((el) => (
    <tr key={el.id} className=" font-roboto text-sm text-[#8094ae]">
      <td>
        <div className="flex items-center gap-3">
          <Checkbox color="violet" size="xs" />{" "}
          <span className=" text-[#6576ff]">{el.id}</span>
        </div>
      </td>
      <td>{el.name}</td>
      <td>{el.package}</td>
      <td
        className={`${
          el.booking ? "text-teal-500" : "text-yellow-500"
        } font-semibold`}
      >
        {el.booking ? "Active" : "Pending"}
      </td>
      <td>{el.roomType}</td>
      <td>{el.arrive}</td>
      <td
        className={`${
          el.payment ? "text-teal-500" : "text-yellow-500"
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
