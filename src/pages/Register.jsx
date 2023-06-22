import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import './login.css'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-50 overflow-hidden font-nunito grid lg:grid-cols-5 h-screen">
      {/* left */}
      <div className=" animate__animated animate__fadeInLeft bg-img max-lg:hidden lg:col-span-2 flex justify-center items-center bg-blue-300">
        <div className=" space-y-8 ">
          <h1 className=" text-[30px] text-white font-[700] text-center">
            Welcome Back!
          </h1>
          <div className="text-white font-[500] text-center text-lg w-[60%] mx-auto">
            To keep connected with us please login with your personal info
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => navigate(`/login`)}
              className=" w-[50%] uppercase text-white font-[700] text-[14px] border border-white px-6 py-4 rounded-full"
            >
              sign in
            </button>
          </div>
        </div>
      </div>

      {/* right register form */}

      <div className=" flex justify-center items-center lg:col-span-3 max-sm:mx-4">
        <div className=" sm:w-[60%]  m-auto">
          <div className=" space-y-5 mb-5">
            <h1 className=" text-[30px] text-[#5664d9] font-[700] text-center">
              Create Account
            </h1>
            <div className=" flex items-center gap-3 justify-center">
              <div className=" bg-white w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className=" bg-white w-10 h-10 flex items-center justify-center border rounded-full text-xl cursor-pointer">
                <FaGooglePlusG />
              </div>
              <div className=" bg-white w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
            <div className=" text-[#8094ae] text-center">
              or use your email for registration:
            </div>
          </div>
          <form className="">
            <div className="">
              <div className=" relative">
                <input
                autoFocus
                  type="text"
                  name=""
                  placeholder="Name"
                  className=" text-gray-600 pl-12 py-4 rounded w-full outline-none bg-blue-50 mb-4"
                />
                <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                  <AiOutlineUser />
                </span>
              </div>
              <div className=" relative">
                <input
                  type="text"
                  name=""
                  placeholder="Email"
                  className=" text-gray-600 pl-12 py-4 rounded w-full outline-none bg-blue-50 mb-4"
                />
                <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                  <AiOutlineMail />
                </span>
              </div>
              <div className=" relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  name=""
                  placeholder="Password"
                  className=" text-gray-600 px-12 py-4 rounded w-full outline-none bg-blue-50 mb-8"
                />
                <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                  <RiLockLine />
                </span>
                {showPassword ? (
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className=" cursor-pointer absolute right-5 top-[12px] text-gray-600 w-8 h-8 flex justify-center items-center hover:bg-blue-100 transition duration-200 rounded-full"
                  >
                    <AiOutlineEyeInvisible />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className=" cursor-pointer absolute right-5 top-[12px] text-gray-600 w-8 h-8 flex justify-center items-center hover:bg-blue-100 transition duration-200 rounded-full"
                  >
                    <AiOutlineEye />
                  </div>
                )}
              </div>
            </div>

            <div className=" flex justify-center">
              <button className=" w-[50%] uppercase text-white font-[700] text-[14px] bg-[#5664d9] px-6 py-4 rounded-full">
                sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
};

export default Register;
