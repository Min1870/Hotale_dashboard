import { Grid, MultiSelect, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import React, { useState } from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const Quill = ReactQuill.Quill;
  var Font = Quill.import("formats/font");
  Font.whitelist = ["Nunito", "Roboto"];
  Quill.register(Font, true);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: Font.whitelist }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      [("link", "image")],
    ],
  };
  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
  ];

  const [value, setValue] = useState(null);
  const [editorValue, setEditorValue] = useState("");
  const nav = useNavigate();

  return (
    <div className="px-0 md:px-[22px] py-8 bg-[#F5F6FA]">
      {/* Header */}
      <div className=" flex justify-between items-center mb-7 px-5 md:p-0 relative">
        <div>
          <h1 className=" font-nunito font-bold text-[28px] text-[#364a63]">
            Add Blog
          </h1>
          <h4 className=" font-roboto text-sm text-[#8094ae]">
            Create your own blog
          </h4>
        </div>
      </div>
      <div className="border border-[#dbdfea] rounded bg-white p-5">
        <Grid>
          <Grid.Col sm={6} md={6} xl={4}>
            <TextInput
              placeholder="Title"
              label="Title"
              autoFocus
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={4}>
            <TextInput
              placeholder="Author"
              label="Author"
              styles={{
                input: {
                  ":focus-within": {
                    borderColor: "#000",
                  },
                },
              }}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={4}>
            <MultiSelect
              label="Tags"
              placeholder="Select Tags"
              maxSelectedValues={4}
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
                "Article",
                "Asia",
                "Hotel",
                "Nature",
                "Resort",
                "Spa",
                "Tips",
                "Tour",
                "Travel",
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={4}>
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
              label="Created date"
              placeholder="mm-dd-yyyy"
              value={value}
              onChange={setValue}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={6} xl={4}>
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
          <Grid.Col span={12} className=" min-h-[300px]">
            <ReactQuill
              theme="snow"
              value={editorValue}
              onChange={setEditorValue}
              modules={modules}
              formats={formats}
            />
          </Grid.Col>
        </Grid>
        <button
          onClick={() => nav("/blogs")}
          className="py-[7px] px-[18px] mt-4 text-sm font-bold font-nunito text-white rounded bg-[#000] hover:bg-[#2a2a2a] active:bg-[#898989]"
        >
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
