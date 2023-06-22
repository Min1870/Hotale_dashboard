import { BiMenuAltRight } from "react-icons/bi";
import { Badge, Drawer } from "@mantine/core";
import { MdAdminPanelSettings, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { RiShieldStarFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";
import { Table as MantineTable } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";

const Activity = () => {
  const ths = (
    <tr className=" bg-[#f5f6fa] text-[#8094ae] font-roboto uppercase tracking-wider">
      <th className="text-[11px] text-[#8094ae]">Browser <span className=" md:hidden">/ Ip</span></th>
      <th className="text-[11px] text-[#8094ae] hidden md:table-cell">IP</th>
      <th className="text-[11px] text-[#8094ae]">TIME</th>
      <th className="text-[11px] text-[#8094ae]">ACTIVITY</th>
      <th className=" table-cell"></th>
    </tr>
  );

  const data = [
    {
      id: 1,
      device: "Chrome on Window",
      ip: "86.188.154.225",
      time: "11:34 PM",
      activity: "Deleted",
    },
    {
      id: 2,
      device: "Mozilla on Window",
      ip: "192.149.122.128",
      time: "11:34 PM",
      activity: "Updated",
    },
    {
      id: 3,
      device: "Chrome on iMac",
      ip: "192.149.122.128",
      time: "11:34 PM",
      activity: "Deleted",
    },
    {
      id: 4,
      device: "Chrome on Window",
      ip: "192.149.122.128",
      time: "11:34 PM",
      activity: "Created",
    },
    {
      id: 5,
      device: "Mozilla on Window",
      ip: "86.188.154.225",
      time: "11:34 PM",
      activity: "Updated",
    },
    {
      id: 6,
      device: "Chrome on iMac",
      ip: "192.149.122.128",
      time: "11:34 PM",
      activity: "Created",
    },
    {
      id: 7,
      device: "Chrome on Window",
      ip: "192.149.122.128",
      time: "11:34 PM",
      activity: "Updated",
    },
    {
      id: 8,
      device: "Mozilla on Window",
      ip: "86.188.154.225",
      time: "11:34 PM",
      activity: "Deleted",
    },
    {
      id: 1,
      device: "Chrome on iMac",
      ip: "192.149.122.128",
      time: "11:34 PM",
      activity: "Created",
    },
  ];

  const colors = {
    Deleted: "#e85347",
    Updated: "#1ee0ac",
    Created: "#6576ff",
  };

  const rows = data.map((d) => (
    <tr key={d.id}>
      <td className=" text-[14px] font-roboto text-[#526484] font-normal">
        <div>
        {d.device}
        <div className="text-[#8094ae] text-[13px] font-roboto md:hidden">{d.ip}</div>
        </div>
      </td>
      <td className=" text-[#8094ae] text-[13px] font-roboto hidden md:table-cell">{d.ip}</td>
      <td className=" text-[#8094ae] text-[13px] font-roboto">{d.time}</td>
      <td className=" text-[#8094ae] text-[13px] font-roboto">
        <Badge
          radius="xs"
          size="sm"
          className=""
          style={{
            backgroundColor: colors[d.activity],
            color: "white",
            fontSize: "10px",
          }}
        >
          {d.activity}
        </Badge>
      </td>
      <td>
        <div className=" hover:bg-[#fce7e5] transition-all duration-200 text-[#8094ae] hover:text-[#e85347] w-6 h-6 flex items-center justify-center rounded-full">
          <RxCross2 className=""/>
        </div>
      </td>
    </tr>
  ));

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
                Account Activity
              </h5>
              <span className=" text-[14px] text-[#8094ae] font-roboto">
                Here is your last 20 login activities log.
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
        <div className="">
          <div className=" border border-[#dbdfea]">
            <MantineTable
              horizontalSpacing="sm"
              verticalSpacing="xs"
              highlightOnHover
              className=" cursor-pointer"
            >
              <thead>{ths}</thead>
              <tbody>{rows}</tbody>
            </MantineTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
