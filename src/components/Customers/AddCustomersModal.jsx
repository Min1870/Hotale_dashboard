import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { Grid, Select, TextInput, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { DatePickerInput } from "@mantine/dates";
import { BsCalendar4Week } from "react-icons/bs";

const AddCustomersModal = ({ onClose }) => {
  const [value, setValue] = useState(null);
  const [departValue, setDepartValue] = useState(null);
  return (
    <div className=" py-[36px] px-[40px]">
      <Grid>
        <Grid.Col sm={6} md={6}>
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
          />
        </Grid.Col>
        <Grid.Col sm={6} md={6}>
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
          />
        </Grid.Col>

        <Grid.Col sm={6} md={6}>
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
          />
        </Grid.Col>
        <Grid.Col sm={6} md={6}>
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
          />
        </Grid.Col>
        <Grid.Col sm={6} md={6}>
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
          />
        </Grid.Col>
        <Grid.Col sm={6} md={6}>
          <Select
            label="Last Package"
            defaultValue="Strater"
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
                    backgroundColor: "#000000",
                    color: "#ffffff",
                  },
                },
              },
            }}
            data={["Strater", "Honeymoon", "Vacation", "Continental"]}
          />
        </Grid.Col>
        <Grid.Col sm={6} md={6} xl={3}>
          <Select
            label="Group"
            defaultValue={"Silver"}
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
                    backgroundColor: "#000000",
                    color: "#ffffff",
                  },
                },
              },
            }}
            data={["Diamond", "Silver", "Platinum", "Gold"]}
          />
        </Grid.Col>
      </Grid>
      <div className=" mt-8 flex gap-5">
        <button
          onClick={onClose}
          className=" text-white font-nunito text-[13px] rounded-[0.25rem] px-[18px] py-[7px] transition-all bg-[#000000] hover:bg-[#1d1d1d]"
        >
          Add Customer
        </button>
        <button
          onClick={onClose}
          className=" text-[#000000] transition-all hover:text-[#1d1d1d] font-roboto text-[13.6px] rounded-[0.25rem] px-[18px] py-[7px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCustomersModal;
