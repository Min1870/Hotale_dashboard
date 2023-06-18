import { BiMenuAltRight } from "react-icons/bi";

const Customers = () => {
  return (
    <div className=" font-nunito py-[24px] mt-[65px] bg-[#f5f6fa]">
      <div className=" w-full px-[7px]">
        <div>
          <div className=" pb-[28px]">
            <div className=" flex items-center justify-between">
              <div className="">
                <h3 className=" text-[24px] font-bold text-[#363a63] tracking-tight mb-[8px]">
                  Customer's Lists
                </h3>
                <div>
                  <p className=" text-[#8094ae] text-[14px] font-roboto">
                    You have total 2,595 customer's.
                  </p>
                </div>
              </div>
              <div className="">
                <p>
                  <BiMenuAltRight size={34} className=" md:hidden" />
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
