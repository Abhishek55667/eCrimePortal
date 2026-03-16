import React from "react";

const Complaint = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-white h-screen w-4/7 rounded-4xl p-10 font-bold">
        <h1 className="text-4xl ">Complaint Register</h1>
        <div className="p-8">
          <div className="flex  justify-evenly">
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
            </div>
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
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Complaint;
