import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./login.css"
import "animate.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 overflow-hidden font-nunito grid lg:grid-cols-5 h-screen">
      {/* left login form  */}
      <div className="  col-span-3 flex justify-center items-center max-sm:mx-4">
        <div>
          <div className=" space-y-5 mb-5">
            <h1 className=" text-[30px] text-[#5664d9] font-[700] text-center">
              Sign in to Hotale Dashboard
            </h1>
            <div className=" flex items-center gap-3 justify-center">
              <div className=" bg-white w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className=" bg-white w-10 h-10 flex items-center justify-center border rounded-full text-xl cursor-pointer">
                <FaGooglePlusG />
              </div>
              <div className="bg-white w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
            <div className=" text-[#8094ae] text-center">
              or use your email account
            </div>
          </div>
          <form>
            <div className=" relative">
              <input
              autoFocus
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
                className=" text-gray-600 px-12 py-4 rounded w-full outline-none bg-blue-50 mb-4"
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
            <div className="text-gray-700 font-[500] text-center text-lg cursor-pointer mb-8">
              Forgot your password?
            </div>
            <div className=" flex justify-center">
              <button className=" w-[50%] uppercase text-white font-[700] text-[14px] bg-[#5664d9] px-6 py-4 rounded-full">
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* right  */}
      <div className=" animate__animated animate__fadeInRight bg-img max-lg:hidden col-span-2 flex justify-center items-center bg-blue-300">
        <div className=" space-y-8 ">
          <h1 className=" text-[30px] text-white font-[700] text-center">
            Hello, Friend!
          </h1>
          <div className="text-white font-[500] text-center text-lg w-[60%] mx-auto">
            Enter your personal details and start journey with us
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => navigate(`/register`)}
              className=" w-[50%] uppercase text-white font-[700] text-[14px] border border-white px-6 py-4 rounded-full"
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
