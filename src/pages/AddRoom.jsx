import { Select, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const nav = useNavigate();
  const submitHandler = (e) => {
      e.preventDefault();
      nav('/rooms')
  }
  return (
    <div className="px-0 md:px-[22px] py-8 bg-[#F5F6FA]">
      {/* Header */}
      <div className=" flex justify-between items-center mb-7 px-5 md:p-0 relative">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Add Room
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            Add a hotale room
          </h4>
        </div>
      </div>

      {/* form card  */}
      <div className="w-auto pb-[36px] border border-[#dbdfea] rounded p-5 bg-white">
          <form onSubmit={submitHandler}>
          
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Room No
                </label>
                <input
                  placeholder="Room No"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="room_no"
                  name="room_no"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Room Title
                </label>
                <input
                  placeholder="Room Title"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="room_title"
                  name="room_title"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Price
                </label>
                <input
                  placeholder="Price"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="price"
                  name="price"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Discount Percentage
                </label>
                <input
                  placeholder="Discount Percentage"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="discount"
                  name="discount"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Maximum Guest
                </label>
                <input
                  placeholder="Maximum Guest"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="max_guest"
                  name="max_guest"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Room Space
                </label>
                <input
                  placeholder="Room Space"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="room_space"
                  name="room_space"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="ac" className="text-[.875rem] font-[500]">
                  Room View
                </label>
                <Select
                  className=" w-full text-[0.8rem]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200  mt-[.5rem]"
                  placeholder="Room View"
                  rightSection={<IoIosArrowDown size="1rem" />}
                  rightSectionWidth={30}
                  styles={(theme) => ({
                    input: {
                      ":focus-within": {
                        borderColor: "black",
                        boxShadow: "0 0 3px 2px rgba(0,0,0,.1)",
                      },
                    },
                    item: {
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[1]
                              : theme.colors.dark[9],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.gray[0],
                        },
                      },
                    },
                    rightSection: { pointerEvents: "none" },
                  })}
                  data={[
                    { value: "poolView", label: "pool view" },
                    { value: "forestView", label: "forest view" },
                    { value: "cityView", label: "city view" },
                  ]}
                  id="view"
                  name="view"
                 
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="room_no" className="text-[.875rem] font-[500]">
                  Room Type
                </label>
                <Select
                  className=" w-full text-[0.8rem focus:ring-2 focus:ring-gray-200  mt-[.5rem]"
                  placeholder="Room Type"
                  rightSection={<IoIosArrowDown size="1rem" />}
                  rightSectionWidth={30}
                  data={[
                    { value: "Delux", label: "Delux" },
                    { value: "Super Delux", label: "Super Delux" },
                    { value: "Single", label: "Single" },
                    { value: "Double", label: "Double" },
                  ]}
                  id="room_type"
                  name="room_type"
                  styles={(theme) => ({
                    input: {
                      ":focus-within": {
                        borderColor: "black",
                        boxShadow: "0 0 3px 2px rgba(0,0,0,.1)",
                      },
                    },
                    item: {
                      // applies styles to selected item
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[1]
                              : theme.colors.dark[9],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.gray[0],
                        },
                      },
                    },
                    rightSection: { pointerEvents: "none" },
                  })}
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
                  styles={(theme) => ({
                    input: {
                      ":focus-within": {
                        borderColor: "black",
                        boxShadow: "0 0 3px 2px rgba(0,0,0,.1)",
                      },
                    },
                    item: {
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[1]
                              : theme.colors.dark[9],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.gray[0],
                        },
                      },
                    },
                    rightSection: { pointerEvents: "none" },
                  })}
                  data={[
                    { value: "AC", label: "AC" },
                    { value: "None", label: "None" },
                  ]}
                  id="ac"
                  name="ac"
                 
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
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="bed_capacity"
                  name="bed_capacity"
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
                  styles={(theme) => ({
                    input: {
                      ":focus-within": {
                        borderColor: "black",
                        boxShadow: "0 0 3px 2px rgba(0,0,0,.1)",
                      },
                    },
                    item: {
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[1]
                              : theme.colors.dark[9],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.gray[0],
                        },
                      },
                    },
                    rightSection: { pointerEvents: "none" },
                  })}
                  data={[
                    { value: "None", label: "None" },
                    { value: "Breakfast", label: "Breakfast" },
                    { value: "Lunch", label: "Lunch" },
                    { value: "Two", label: "Two" },
                    { value: "All", label: "All" },
                  ]}
                  id="meal"
                  name="meal"
            
                />
              </div>

              <div className="mb-[28px] me-5">
                <label htmlFor="rent" className="text-[.875rem] font-[500]">
                  Rent
                </label>
                <input
                  placeholder="Rent"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="rent"
                  name="rent"
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
                  styles={(theme) => ({
                    input: {
                      ":focus-within": {
                        borderColor: "black",
                        boxShadow: "0 0 3px 2px rgba(0,0,0,.1)",
                      },
                    },
                    item: {
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[1]
                              : theme.colors.dark[9],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.gray[0],
                        },
                      },
                    },
                    rightSection: { pointerEvents: "none" },
                  })}
                  data={[
                    { value: "Open", label: "Open" },
                    { value: "Inactive", label: "Inactive" },
                    { value: "Booked", label: "Booked" },
                  ]}
                  id="status"
                  name="status"
                />
              </div>

              <div className="mb-[28px] me-5">
                <label
                  htmlFor="images"
                  className="text-[.875rem] font-[500]"
                >
                  Images
                </label>
                <div className="relative w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-black focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]">
                  <span className="flex items-center gap-2"><BsFillCloudUploadFill  className="text-xl"/>Upload from files</span>
                  
                  <input
                  multiple
                  placeholder="Upload from files"
                  className="absolute top-1 opacity-0 w-full rounded-[4px]"
                  type="file"
                  id="images"
                  name="images"
                 
                />
                </div>
                
              </div>

              
            </div>
            
            <div className="mb-[28px] me-5">
              <Textarea
              placeholder="Large text area content"
              label="Description"
              styles={{
                input: {
                  height: "150px",
                  ":focus-within": { borderColor: "#000" },
                },
              }}
            />
              </div>

            <div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-600 transition duration-200 ease-in rounded-[4px] text-white px-[18px] py-[7px] text-[0.85rem]"
              >
                Add Room
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default AddRoom;
