import React, { useState } from "react";
import Table from "../utils/Table";
import {
  Table as MantineTable,
  Pagination,
  Popover,
  Select,
} from "@mantine/core";
import { TbCircleFilled, TbSettings } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import { HiOutlinePlus, HiPrinter } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, Text } from "@mantine/core";
import { IoIosArrowDown, IoIosArrowForward, IoIosCheckmark } from "react-icons/io";
import dayjs from "dayjs";

const InvoiceList = () => {
  
  const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const fullDate = dayjs().format('DD MMMM YYYY').toString() + ", " + time;

  const [paymentID, setPaymentID] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(fullDate);

  //for addInvoiceModal
  const [opened, { open, close }] = useDisclosure(false);
  const [searchShow, setSearchShow] = useState(false);
 
  const [invoices, setInvoices] = useState([
    {
      paymentID: "746F5K2",
      date: "23 Jan 2019, 10:45pm",
      amount: "2300",
      status: "Complete",
    },
    {
      paymentID: "546H74W",
      date: "12 Jan 2020, 10:45pm",
      amount: "120",
      status: "Pending",
    },
    {
      paymentID: "87X6A4",
      date: "26 Dec 2019, 12:15 pm",
      amount: "560",
      status: "Complete",
    },
    {
      paymentID: "986G531",
      date: "21 Jan 2019, 6 :12 am",
      amount: "3654",
      status: "Pending",
    },
    {
      paymentID: "326T4M9 ",
      date: "21 Jan 2019, 6 :12 am",
      amount: "200",
      status: "Complete",
    },
  ]);

  const InvoiceData = { paymentID,date, amount, status };
  const submitHandler = (e) => {
    e.preventDefault();
    setDate(fullDate)
    setInvoices([...invoices, InvoiceData]);
  };

  const ths = (
    <tr className="text-[13px] uppercase">
      <th>Payment ID</th>
      <th className="hidden md:table-cell">Date</th>
      <th>Amount</th>
      <th className="hidden md:table-cell">Status</th>
      <th></th>
    </tr>
  );

  const rows = invoices.map((el) => (
    <tr key={el.paymentID} className=" font-roboto text-[13px] text-[#8094ae]">
      <td><span className="text-[#6576ff] font-[500]">#{el?.paymentID}</span>
      <p className="table-cell md:hidden">{el?.date}</p></td>
      <td className="hidden md:table-cell">{el?.date}</td>
      <td className="font-semibold text-gray-600">
        <span>$ {el?.amount.length === 0 ? '00':el?.amount}.00</span>
        <p className={`${
          (el.status === "Pending" && "text-[#f4bd0e]") ||
          (el.status === "Complete" && "text-[#1ee0ac]")
        } font-[500] md:hidden table-cell`}><div className="flex gap-1 items-center">
        <span className="text-[8px]"><TbCircleFilled /></span>{el.status}
        </div></p>
      </td>
      <td
        className={`${
          (el.status === "Pending" && "text-[#f4bd0e]") ||
          (el.status === "Complete" && "text-[#1ee0ac]")
        } font-[500] hidden md:table-cell`}
      >
        <div className="flex gap-1 items-center text-[13px]">
        <span className="text-[8px]"><TbCircleFilled /></span>{el.status}
        </div>
       
      </td>
      <td className="w-[100px] hidden md:table-cell">
        <div >
          <div className="flex items-center gap-4">
          <div className="p-1 rounded-sm text-[#6576ff]  transition ease-in duration-150 hover:text-white hover:bg-[#6576ff]"><HiPrinter className="text-xl"/></div>
          <button className="text-[13px] font-semibold py-1 px-3 rounded-sm transition ease-in duration-150 text-[#6576ff] bg-[#6577ff15]  hover:text-white hover:bg-[#6576ff]">View</button>
        </div>
        </div>
        
      </td>
      <td className="table-cell md:hidden">
      <div className="text-xl"><IoIosArrowForward /></div>
        
      </td>
    </tr>
  ));
  return (
    <div className=" py-8">
      {/* header  */}
      <div className="mx-5 flex justify-between items-center mb-7">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Invoices
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            You have total <span>{invoices.length}</span> invoices.
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
                Add New
              </div>
              <div className="select-none hover:text-[#6576ff] hover:bg-gray-100 px-[20px] py-[10px] text-[12px] font-[500] text-[#526484] transition-all duration-[0.4s]">
                Import
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>

      {/* invoice model */}
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        // title="Add Invoice"
        centered
      >
        <div className="w-auto md:w-[520px] px-[40px] pb-[36px]">
          <form onSubmit={submitHandler}>
            <h1 className="text-[1.15rem] font-semibold mb-5">Add Invoice</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mb-[28px] me-5">
                <label htmlFor="PaymentID" className="text-[.875rem] font-[500]">
                  Payment ID
                </label>
                <input
                  placeholder="Payment ID"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="PaymentID"
                  name="PaymentID"
                  value={paymentID}
                  onChange={(e) => setPaymentID(e.target.value)}
                />
              </div>

              <div className="mb-[28px] me-5">
                <label
                  htmlFor="amount"
                  className="text-[.875rem] font-[500]"
                >
                 Amount
                </label>
                <input
                  placeholder="Amount"
                  className=" w-full text-[0.8rem] px-[16px] py-[7px] rounded-[4px]  focus:border-[#6576ff] focus:ring-2 focus:ring-gray-200 outline-none border border-gray-300 mt-[.5rem]"
                  type="text"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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
                    { value: "Complete", label: "Complete" },
                    { value: "Pending", label: "Pending" },
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

      <div className="mx-0 md:mx-5 border border-[#dbdfea] rounded">
        {/* <div className=" p-5 flex justify-between items-center border-b">
          <div className=" flex items-center gap-4">
            <h1>All Invoices</h1>
          </div>
          <div className=" flex items-center gap-3 text-xl text-[#526484]">
            <div className="border-r border-[#A8B1C1] pr-5 h-8 flex items-center">
              <FiSearch />
            </div>
            <div className=" flex gap-2 ">
              <div className="p-2 transition-all duration-300 hover:bg-[#E5E9F2] hover:rounded-full">
                <TbSettings />
              </div>
            </div>
          </div>
        </div> */}

<div className=" p-5 border-b  relative">
        <div
          className={`w-full flex items-center gap-2 transition-all duration-300 py-2 ${
            searchShow ? "flex" : "hidden"
          }`}
        >
          <BsArrowLeft
            className="text-xl"
            onClick={() => setSearchShow(!searchShow)}
          />
          <input
            type="text"
            autoFocus
            placeholder="Quick search by order id"
            className="flex-1 outline-none pl-3 text-sm"
          />
          <FiSearch
            onClick={() => setSearchShow(!searchShow)}
            className="text-xl text-[#526484] cursor-pointer hover:text-[#7f8dff]"
          />
        </div>
        <div
          className={` justify-between items-center transition-all duration-300 ${
            searchShow ? "hidden" : "flex"
          }`}
        >
          <div>
          <h1 className="text-xl font-[500]">All Invoices</h1>
          </div>
          <div className=" flex items-center gap-3 text-xl text-[#526484]">
            <div
              className="border-r border-[#A8B1C1] pr-5 h-8 flex items-center cursor-pointer"
              onClick={() => setSearchShow(!searchShow)}
            >
              <FiSearch />
            </div>
            <div className=" flex gap-2">
             
              <Popover width={200} position="bottom-end" shadow="lg">
                <Popover.Target>
                  <div className="setting p-2 relative cursor-pointer">
                    <TbSettings />
                  </div>
                </Popover.Target>
                <Popover.Dropdown className="px-0">
                  <div className="text-[#364a63] text-sm">
                    <div className="border-b pb-3 mb-3">
                      <h1 className="text-sm font-bold px-5">SHOW</h1>
                      <ul className=" flex flex-col gap-2 mt-3 cursor-pointer">
                        <li className="table-li flex justify-between items-center">
                          10 <IoIosCheckmark className="text-xl" />
                        </li>
                        <li className="table-li">20</li>
                        <li className="table-li">50</li>
                      </ul>
                    </div>
                    <div className="">
                      <h1 className="font-bold px-5">ORDER</h1>
                      <ul className=" flex flex-col gap-2 mt-3 cursor-pointer">
                        <li className="table-li flex justify-between items-center">
                          DESC <IoIosCheckmark className="text-xl" />
                        </li>
                        <li className="table-li">ASC</li>
                      </ul>
                    </div>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </div>
          </div>
        </div>
      </div>

        <MantineTable
          horizontalSpacing="lg"
          verticalSpacing="lg"
          highlightOnHover
          className=" cursor-pointer"
        >
          <thead>{ths}</thead>
          <tbody>{rows}</tbody>
        </MantineTable>

        
      <div className="p-5 flex justify-between items-center font-roboto border-t flex-col md:flex-row gap-4 md:gap-0">
        <Pagination
          total={10}
          styles={() => ({
            control: {
              "&[data-active]": {
                backgroundColor: "#ebeef2",
                color: "#6576ff",
              },
              "&[data-active]:not([data-disabled])": {
                ":hover": {
                  backgroundColor: "#ebeef2",
                },
              },
            },
          })}
        />
        <div className=" flex items-center gap-4 text-sm text-[#526484]">
          <span>PAGE</span>
          <Select
            placeholder="1"
            maxDropdownHeight={280}
            rightSection={<IoChevronDownOutline size="1rem" />}
            rightSectionWidth={30}
            styles={{
              rightSection: { pointerEvents: "none" },
              root: {
                ":focus-within": {
                  borderColor: "#6576ff",
                  boxShadow: "0 0 0 3px rgba(101,118,255,.1)",
                },
              },

              item: {
                margin: "2px 0",
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: "#E5E9F2",

                    color: "#566A92",
                  },
                },
              },
            }}
            data={["1", "2", "3"]}
            w={60}
          />
          <span>OF 102</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default InvoiceList;
