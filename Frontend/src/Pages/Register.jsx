import React from "react";
import Navbar from "../Components/Navbar";

const Register = () => {
  return (
    <div className="flex justify-center my-12">
      <div className=" h-full p-20 w-4/7 bg-blue-50 rounded-2xl ">
        <h1 className="font-bold text-4xl pb-4 text-center">Register Details</h1>
        <div className="flex gap-30 mt-5">
          <div>
            <label className="block font-bold text-black  mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your Username"
              className="w-full bg-gray-200 text-gray-800 pl-2 mr-30  py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />

            <label className="block text-black font-bold text-sm mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              placeholder="Enter your Full date of birth"
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />
            <label className="block font-bold text-black text-sm font-boldmb-2" htmlFor="mobile">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create your new Password"
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-black text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your Full name"
              className="w-full bg-gray-200 text-gray-800 pl-2 mr-30  py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />

            <label className="block text-black text-sm font-bold font-boldmb-2" htmlFor="mobile">
              Mobile
            </label>
            <input
              id="mobile"
              type="tel"
              maxLength={10}
              minLength={9}
              placeholder="Enter your valid phone no."
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />
            <label className="block text-black text-sm font-bold font-boldmb-2" htmlFor="rePassword">
              Re-enter Password
            </label>
            <input
              id="rePassword"
              type="password"

              placeholder="Re-enter your Password"
              className="w-full bg-gray-200  text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
            />
            
          </div>

        </div>
       
        <div>
          <label className="block text-black font-bold text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
          />

          <label className="block text-black font-bold text-sm mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            cols={30}
            rows={5}
            id="address"
            type="text"
            placeholder="Enter your Full Address"
            className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2  focus:ring-blue-300 placeholder-gray-500 text-sm"
          />
          <div className="text-center pt-4">
            <button className="bg-blue-800 text-white w-140 h-10 rounded-3xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
