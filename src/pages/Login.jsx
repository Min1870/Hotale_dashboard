import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css"
import "animate.css"
import { useLoginMutation } from "../redux/api/contact";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/services/authSlice";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useDispatch()
  const location = useLocation()

  const defEmail = location?.state?.email;
  const defPassword = location?.state?.password;
  console.log(defEmail, defPassword);

  const [user, setUser] = useState({ email: defEmail, password: defPassword})
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({...user, [key]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await login(user);
    console.log(data);
    
    if (data?.data?.success) {
        dispatch(addUser({ user: data?.data?.user, token: data?.data?.token }));

      navigate("/");
    }else {
      setError("Incorrect email or password")
    }
  }
  return (
    <div className="bg-gray-50 overflow-hidden font-nunito grid lg:grid-cols-5 h-screen">
      {/* left login form  */}
      <div className="  col-span-3 flex justify-center items-center max-[400px]:mx-4">
        <div className=" max-[400px]:w-[300px] w-[400px]">
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
          <form onSubmit={handleSubmit}>
            <div className=" relative mb-4">
              <input
              autoFocus
              onChange={handleChange}
              defaultValue={user.email}
                type="text"
                name="email"
                placeholder="Email"
                className=" text-gray-600 pl-12 py-4 rounded w-full outline-none bg-blue-50"
              />
              <small className="text-red-500">
                  {error && error}
                </small>
              <span className=" absolute top-[18px] left-5 text-gray-400 text-lg">
                <AiOutlineMail />
              </span>
            </div>
            <div className=" relative mb-4">
              <input
              onChange={handleChange}
              defaultValue={user.password}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className=" text-gray-600 px-12 py-4 rounded w-full outline-none bg-blue-50"
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
            <div className=" text-[#8094ae] text-center mb-8">
              Do not have an account? <span className=" text-blue-400 ml-3 cursor-pointer" onClick={()=> navigate(`/register`)}>Register here</span>
            </div>
            <div className=" flex justify-center">
              <button disabled={isLoading} className="uppercase text-white font-[700] text-[14px] bg-[#5664d9] px-14 py-4 rounded-full">
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* right  */}
      <div className=" animate__animated animate__fadeInRight bg-img max-lg:hidden col-span-2 flex justify-center items-center bg-blue-300">
        <div className=" max-w-[300px] space-y-8 ">
          <h1 className=" text-[30px] text-white font-[700] text-center">
            Hello, Friend!
          </h1>
          <div className="text-white font-[500] text-center text-lg mx-auto">
            Enter your personal details and start journey with us
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => navigate(`/register`)}
              className=" uppercase text-white font-[700] text-[14px] border border-white px-14 py-4 rounded-full"
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
