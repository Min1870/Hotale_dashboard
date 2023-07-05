import { Grid, Select, TextInput, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import "../components/fileInput.css";
import { DatePickerInput } from "@mantine/dates";
import { BsCalendar4Week } from "react-icons/bs";
const EditBooking = () => {
  const [value, setValue] = useState(null);
  const [departValue, setDepartValue] = useState(null);
  return (
    <div className="px-[22px] py-8 bg-[#F5F6FA]">
      {/* Header */}
      <div className="mb-7">
        <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
          Edit Booking
        </h1>
      </div>

      {/* Form Card */}
      <div className="border border-[#dbdfea] rounded p-5 bg-white">
        <Grid>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
              placeholder="First Name"
              label="First Name"
              defaultValue="Abu Bin"
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
              placeholder="Last Name"
              label="Last Name"
              defaultValue="Ishtiyak"
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <Select
              label="Gender"
              placeholder="Select Gender"
              defaultValue="Male"
              rightSection={<IoChevronDownOutline size="1rem" />}
              rightSectionWidth={30}
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
                rightSection: { pointerEvents: "none" },
                item: {
                  margin: "2px 0",
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
              data={["Male", "Female", "Other"]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
              placeholder="Phone"
              label="Phone"
              defaultValue="+811 847-4958"
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
              placeholder="Email Address"
              label="Email Address"
              defaultValue="info@softnio.com"
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
              placeholder="Address"
              label="Address"
              defaultValue="102 Cherry Ridge Drive, Detroit"
            />
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
              defaultValue="Strater Package"
              placeholder="Select an package"
              rightSection={<IoChevronDownOutline size="1rem" />}
              rightSectionWidth={30}
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
                rightSection: { pointerEvents: "none" },
                item: {
                  margin: "2px 0",
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
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
              defaultValue="Super Delux"
              placeholder="Select Room Type"
              rightSection={<IoChevronDownOutline size="1rem" />}
              rightSectionWidth={30}
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
                rightSection: { pointerEvents: "none" },
                item: {
                  margin: "2px 0",
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
              data={["Delux", "Super Delux", "Single", "Double"]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <DatePickerInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
                day: {
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
              icon={<BsCalendar4Week size="1.1rem" stroke={1.5} />}
              label="Arrive date"
              placeholder="mm-dd-yyyy"
              value={value}
              onChange={setValue}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <DatePickerInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
                day: {
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
              icon={<BsCalendar4Week size="1.1rem" stroke={1.5} />}
              label="Depart date"
              placeholder="mm-dd-yyyy"
              value={departValue}
              onChange={setDepartValue}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={3}>
            <TextInput
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
              placeholder="Total Person"
              label="Total Person"
              defaultValue="2"
            />
          </Grid.Col>
          <Grid.Col>
            <Textarea
              placeholder="Large text area content"
              label="Note"
              styles={{
                input: {
                  height: "150px",
                  ":focus-within": { borderColor: "#000" },
                },
              }}
            />
          </Grid.Col>
        </Grid>
        <button className="py-[7px] px-[18px] mt-4 text-sm font-bold font-nunito text-white rounded bg-[#000] hover:bg-[#2a2a2a] active:bg-[#898989]">
          Update Booking
        </button>
      </div>
    </div>
  );
};

export default EditBooking;
