import React, { useState } from "react";
import Table from "./../utils/Table";
import { Checkbox, Select } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";
import { FiDownloadCloud } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { Table as MantineTable } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, Popover, Text } from "@mantine/core";
import { TbCircleFilled } from "react-icons/tb";

const Room = () => {
  const [roomNo, setRoomNo] = useState("");
  const [roomType, setRoomType] = useState("Single");
  const [ac, setAc] = useState("AC");
  const [meal, setMeal] = useState("None");
  const [bedCapacity, setBedCapacity] = useState("");
  const [rent, setRent] = useState("");
  const [status, setStatus] = useState("Open");
  const [id, setId] = useState(Date.now() * Math.random());

  //for addRoomModal
  const [opened, { open, close }] = useDisclosure(false);

  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNo: "101",
      roomType: "Single",
      ac: "AC",
      meal: "None",
      bedCapacity: "1",
      rent: "32.00",
      status: "Booked",
    },
    {
      id: 2,
      roomNo: "102",
      roomType: "Single",
      ac: "AC",
      meal: "Brealfast",
      bedCapacity: "1",
      rent: "35.00",
      status: "Pending",
    },
    {
      id: 3,
      roomNo: "103",
      roomType: "Double",
      ac: "None",
      meal: "Lunch",
      bedCapacity: "2",
      rent: "35.00",
      status: "Pending",
    },
    {
      id: 4,
      roomNo: "104",
      roomType: "Single",
      ac: "None",
      meal: "Breakfast",
      bedCapacity: "2",
      rent: "32.00",
      status: "Inactive",
    },
  ]);
  const data = { id, roomNo, roomType, ac, meal, bedCapacity, rent, status };
  const submitHandler = (e) => {
    e.preventDefault();
    setId(Date.now() * Math.random());
    setRooms([...rooms, data]);
  };

  const ths = (
    <tr  className="text-[13px]">
      <th>
        <div className="flex items-center gap-3">
          <Checkbox color="violet" size="xs" />
          <span>Room No.</span>
        </div>
      </th>
      <th>Room Type</th>
      <th className="hidden md:table-cell">Ac/Non Ac</th>
      <th  className="hidden md:table-cell">Meal</th>
      <th  className="hidden md:table-cell">Bed Capacity</th>
      <th className="hidden md:table-cell">Rent</th>
      <th className="hidden md:table-cell">Status</th>
      <th>
        <div className=" border w-6 h-6 p-1 rounded flex justify-center items-center">
          <Popover width={200} position="bottom-end" withArrow shadow="md">
            <Popover.Target>
              <button>
                <HiOutlinePlus />
              </button>
            </Popover.Target>
            <Popover.Dropdown>
              <div
              className="flex gap-2 items-center mb-3"
              >
                <Checkbox color="violet" size="xs" />
                <span className="text-[13px] font-[400]">Booked</span>
              </div>
              <div
              className="flex gap-2 items-center mb-3"
              >
                <Checkbox color="violet" size="xs" />
                <span className="text-[13px] font-[400]">Open</span>
              </div>
              <div
              className="flex gap-2 items-center"
              >
                <Checkbox color="violet" size="xs" />
                <span className="text-[13px] font-[400]">Inactive</span>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </th>
    </tr>
  );

  const rows = rooms.map((el) => (
    <tr key={el.id} className=" font-roboto text-[13px] text-[#8094ae]">
      <td>
        <div className="flex items-center gap-3">
          <Checkbox color="violet" size="xs" />{" "}
          <span className=" text-[#6576ff]">{el.roomNo}</span>
        </div>
      </td>
      <td className="flex items-center gap-2">{el.roomType} <span className={`${el?.roomType === "Single" && "text-[#f4bd0e]" || el?.roomType === "Double" && "text-[#1ee0ac]" || el?.roomType === "Delux" && "text-[#6576ff]" || el?.roomType === "Super Delux" && "text-[#1ee0ac]" ||  el?.roomType === "Suit" && "text-[#e85347]" } table-cell md:hidden text-[12px]`}><TbCircleFilled /></span> </td>
      <td className="hidden md:table-cell">{el.ac}</td>
      <td className="hidden md:table-cell">{el.meal}</td>
      <td className="hidden md:table-cell">{el.bedCapacity}</td>
      <td className="text-gray-600 hidden md:table-cell"><span className="font-[500]">{el.rent}</span><span> USD</span></td>
      <td
        className={`${
          (el.status === "Booked" && "text-[#6576ff]") ||
          (el.status === "Pending" && "text-[#f4bd0e]") ||
          (el.status === "Open" && "text-[#1ee0ac]") ||
          (el.status === "Inactive" && "text-[#e85347]")
        } font-semibold hidden md:table-cell`}
      >
        {el.status}
      </td>
      <td>
        <div className=" text-xl ml-1">
          <BsThreeDots />
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="py-8">

      {/* header  */}
      <div className="mx-5 flex justify-between items-center mb-7">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Room List
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            Here is our various rooms.
          </h4>
        </div>
        <div className="">
          <Popover width={200} position="bottom-end" withArrow shadow="md">
            <Popover.Target>
              <button className="text-lg p-2 rounded text-white bg-[#6576ff] hover:bg-[#5664d9] hover:border-[#6576ff] active:bg-[#515ecc]">
                <HiOutlinePlus />
              </button>
            </Popover.Target>
            <Popover.Dropdown>
              <div
                onClick={open}
                className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]"
              >
                Add Room
              </div>
              <div className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Import Room
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>

      {/* form model */}
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        // title="Add Room"
        centered
      >
        <div className="w-auto md:w-[520px] px-[40px] pb-[36px]">
          <form onSubmit={submitHandler}>
            <h1 className="text-[1.15rem] font-semibold mb-5">Add Room</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Room No
                </label>
                <input
                  placeholder="Room No"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="room_no"
                  name="room_no"
                  value={roomNo}
                  onChange={(e) => setRoomNo(e.target.value)}
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Room Type
                </label>
                <Select
                  className=" w-full text-[0.8rem]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200  mt-[.5rem]"
                  placeholder="Room Type"
                  rightSection={<IoIosArrowDown size="1rem" />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  data={[
                    { value: "Delux", label: "Delux" },
                    { value: "Super Delux", label: "Super Delux" },
                    { value: "Single", label: "Single" },
                    { value: "Double", label: "Double" },
                  ]}
                  id="room_type"
                  name="room_type"
                  value={roomType}
                  onChange={setRoomType}
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="ac" className="text-[.875rem] font-[500]">
                  Air Condition
                </label>
                <Select
                  className=" w-full text-[0.8rem]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200  mt-[.5rem]"
                  placeholder="Air Condition"
                  rightSection={<IoIosArrowDown size="1rem" />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  data={[
                    { value: "AC", label: "AC" },
                    { value: "None", label: "None" },
                  ]}
                  id="ac"
                  name="ac"
                  value={ac}
                  onChange={setAc}
                />
              </div>

              <div className="mb-[28px] me-5">
                <label
                  htmlFor="bed_capacity"
                  className="text-[.875rem] font-[500]"
                >
                  Bed Capacity
                </label>
                <input
                  placeholder="Bed Capacity"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="bed_capacity"
                  name="bed_capacity"
                  value={bedCapacity}
                  onChange={(e) => setBedCapacity(e.target.value)}
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="meal" className="text-[.875rem] font-[500]">
                  meal
                </label>
                <Select
                  className=" w-full text-[0.8rem]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200  mt-[.5rem]"
                  placeholder="Meal"
                  rightSection={<IoIosArrowDown size="1rem" />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  data={[
                    { value: "None", label: "None" },
                    { value: "Breakfast", label: "Breakfast" },
                    { value: "Lunch", label: "Lunch" },
                    { value: "Two", label: "Two" },
                    { value: "All", label: "All" },
                  ]}
                  id="meal"
                  name="meal"
                  value={meal}
                  onChange={setMeal}
                />
              </div>

              <div className="mb-[28px me-5">
                <label htmlFor="rent" className="text-[.875rem] font-[500]">
                  Rent
                </label>
                <input
                  placeholder="Rent"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="rent"
                  name="rent"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="status" className="text-[.875rem] font-[500]">
                  status
                </label>
                <Select
                  className=" w-full text-[0.8rem]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200  mt-[.5rem]"
                  placeholder="Status"
                  rightSection={<IoIosArrowDown size="1rem" />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  data={[
                    { value: "Open", label: "Open" },
                    { value: "Inactive", label: "Inactive" },
                    { value: "Booked", label: "Booked" },
                  ]}
                  id="status"
                  name="status"
                  value={status}
                  onChange={setStatus}
                />
              </div>
            </div>

            <div>
              <button
                onClick={close}
                type="submit"
                className="bg-[#6576ff] hover:bg-[#5664d9] transition duration-200 ease-in rounded-[4px] text-white px-[18px] py-[7px] me-8 text-[0.85rem]"
              >
                Add Room
              </button>
              <a
                onClick={close}
                className="cursor-pointer text-[#6576ff] hover:text-[#5664d9] transition duration-200 ease-in text-[0.85rem] font-[500]"
              >
                Cancel
              </a>
            </div>
          </form>
        </div>
      </Modal>

      {/* table  */}
      <div className="mx-0 md:mx-5 min-w-[450px]"> 
         <Table selectValues={["Change Status"]}>
        <MantineTable
          horizontalSpacing="lg"
          verticalSpacing="lg"
          highlightOnHover
          className=" cursor-pointer"
        >
          <thead>{ths}</thead>
          <tbody>{rows}</tbody>
        </MantineTable>
      </Table>
      </div>
     
    </div>
  );
};

export default Room;
