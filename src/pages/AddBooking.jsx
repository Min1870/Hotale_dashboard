import { Grid, Select, TextInput, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import "../components/fileInput.css";
import { DatePickerInput } from "@mantine/dates";
import { BsCalendar4Week } from "react-icons/bs";
const AddBooking = () => {
  const [value, setValue] = useState(null);
  const [departValue, setDepartValue] = useState(null);
  return (
    <div className="px-[22px] py-8">
      {/* Header */}
      <div className="mb-7">
        <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
          Add Booking
        </h1>
      </div>

      {/* Form Card */}
      <div className="border border-[#dbdfea] rounded p-5">
        <Grid>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput placeholder="First Name" label="First Name" autoFocus />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput placeholder="Last Name" label="Last Name" />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <Select
              label="Gender"
              placeholder="Select Gender"
              rightSection={<IoChevronDownOutline size="1rem" />}
              rightSectionWidth={30}
              styles={{
                rightSection: { pointerEvents: "none" },
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
              data={["Male", "Female", "Other"]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput placeholder="Phone" label="Phone" />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput placeholder="Email Address" label="Email Address" />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput placeholder="Address" label="Address" />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <label
              htmlFor="custom-file-input"
              className=" text-sm font-roboto font-medium "
            >
              Upload Photo
            </label>
            <input
              type="file"
              name="imageInput"
              id="custom-file-input"
              placeholder="Choose File"
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <Select
              label="Gender"
              placeholder="Select an package"
              rightSection={<IoChevronDownOutline size="1rem" />}
              rightSectionWidth={30}
              styles={{
                rightSection: { pointerEvents: "none" },
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
              data={[
                "Strater Package",
                "Honeymoon Package",
                "Vacation Package",
                "Spring Package",
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <Select
              label="Select Room Type"
              placeholder="Select Room Type"
              rightSection={<IoChevronDownOutline size="1rem" />}
              rightSectionWidth={30}
              styles={{
                rightSection: { pointerEvents: "none" },
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
              data={["Delux", "Super Delux", "Single", "Double"]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <DatePickerInput
              icon={<BsCalendar4Week size="1.1rem" stroke={1.5} />}
              label="Arrive date"
              placeholder="mm-dd-yyyy"
              value={value}
              onChange={setValue}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <DatePickerInput
              icon={<BsCalendar4Week size="1.1rem" stroke={1.5} />}
              label="Depart date"
              placeholder="mm-dd-yyyy"
              value={departValue}
              onChange={setDepartValue}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput placeholder="Total Person" label="Total Person" />
          </Grid.Col>
          <Grid.Col>
            <Textarea
              placeholder="Large text area content"
              label="Note"
              styles={{ input: { height: "150px" } }}
            />
          </Grid.Col>
        </Grid>
        <button className="py-[7px] px-[18px] mt-4 text-sm font-bold font-nunito text-white rounded bg-[#6576FF] hover:bg-[#5664d9] hover:border-[#6576ff] active:bg-[#515ecc]">
          Add Booking
        </button>
      </div>
    </div>
  );
};

export default AddBooking;
