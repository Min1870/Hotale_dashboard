import { useFormik } from "formik";
import React, { useState } from "react";
import Table from "./../utils/Table";
import { FiPlus } from "react-icons/fi";
import { Select } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";

const Room = () => {
  const [dropDown, setDropDown] = useState(false);
  const [addRoomModal,setAddRoomModal] = useState(false);
  // const addRoomForm = useFormik({
  //   initialValues: {
  //     room_no: "",
  //     room_type: "Single",
  //     ac: "",
  //     meal: "",
  //     bed_capacity: "",
  //     rent: "",
  //     status: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     setRooms([...rooms, values]);
  //   },
  // });
  const [roomNo,setRoomNo]=useState("");
  const [roomType,setRoomType]=useState("Single");
  const [ac,setAc]=useState("AC");
  const [meal,setMeal]=useState("None");
  const [bedCapacity,setBedCapacity]=useState("");
  const [rent,setRent]=useState("");
  const [status,setStatus]=useState("Open");

  const [rooms, setRooms] = useState([{}]);
  const data={roomNo,roomType,ac,meal,bedCapacity,rent,status};
  const submitHandler = (e) => {
    e.preventDefault();
    setRooms([...rooms, data])
  }
  
  console.log(rooms, "rooms");

  return (
    <div>
      <div className="flex justify-around">
        <div>
          <h3 className="font-nunito text-[1.5rem] font-[700] tracking-[-0.02em] text-[#364a63]">
            Room List
          </h3>
          <p className="text-[#526484]">Here is our verious rooms.</p>
        </div>
        <div className="mb-5 w-[250px] relative">
          <div className="mb-2 text-end">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="bg-[#6576ff] hover:bg-[#5664d9] active:bg-[#515ecc] text-white py-[7px] px-[15px] rounded-md"
            >
              <FiPlus className="text-[1.4em]" />
            </button>
          </div>
          {dropDown && (
            <div className="w-full shadow-gray-400 bg-white z-50 shadow-lg flex flex-col absolute py-[8px]">
              <div onClick={() => setAddRoomModal(true)} className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Add Room
              </div>
              <div className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Import Room
              </div>
            </div>
          )}
        </div>
      </div>

      {/* form model */}
      {addRoomModal && <div className=" w-[520px] px-[40px] py-[36px]">
        <form onSubmit={submitHandler}>
          <h1 className="text-[1.15rem]">Add Room</h1>
          <div className="grid grid-cols-2">
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
                data={[{value:"Delux",label:"Delux"}, {value:"Super Delux",label:"Super Delux"}, {value:"Single",label:"Single"}, {value:"Double",label:"Double"}]}
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
                data={[{value:"AC",label:"AC"}, {value:"Non AC",label:"Non AC"}]}
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
                data={[{value:"None",label:"None"}, {value:"Breakfast",label:"Breakfast"}, {value:"Lunch",label:"Lunch"}, {value:"Two",label:"Two"},{value:"All",label:"All"}]}
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
                data={[{value:"Open",label:"Open"}, {value:"Inactive",label:"Inactive"}, {value:"Booked",label:"Booked"}]}
                id="status"
                name="status"
                value={status}
                onChange={setStatus}
              />
            </div>
          </div>

<div>
<button type="submit" className="bg-blue-300">
            add room
          </button>
          <button className="bg-white ">Cancel</button>
</div>
          
        </form>
      </div>}
      
      {/* <Table children={rooms} /> */}
    </div>
  );
};

export default Room;
