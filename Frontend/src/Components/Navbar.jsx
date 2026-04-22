import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate=useNavigate();
  const [logOut, setLogOut] = useState()


  return (
    <div className='bg-[#0D1525] bg-blend-darken text-teal-50 flex justify-between px-5 py-6   fixed w-screen top-0 '>
      <div className="text-3xl font-bold">
        <h1 className="flex"><p className="text-blue-600">eCrime</p> Portal</h1>
      </div>
      <div className="font-bold flex justify-center gap-9 text-2xl ">
        <Link to={"/UserMain/"} className="hover:text-blue-600 duration-200 transition-colors">Home</Link>
        <Link to={"/UserMain/About"} className="hover:text-blue-600 duration-200 transition-colors">About</Link>

        <div className="relative group">
          <button className="text-white hover:text-blue-600 duration-200 transition-colors">Services</button>

          <ul className="absolute hidden group-hover:block mt-1 bg-white text-black w-45 text-xl shadow-md hover:text-blue-600 duration-200 transition-colors">
            <li className="p-2 hover:bg-gray-200">
              <Link to={"/UserMain/Complaint"}>Register Complaint</Link>
            </li>
            <li className="p-2 border-t-1 hover:bg-gray-200">
              <Link to={'/UserMain/TrackComplaintFirst'}>Track Complaint</Link>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <Link to={"/UserMain/Services"}>All Services</Link>
            </li>
          </ul>
        </div>
        <Link to={"/UserMain/ContactUs"} className="hover:text-blue-600 duration-200 transition-colors">Contact Us</Link>
        <button className="bg-red-700 rounded-2xl text-xs px-2 hover:bg-red-600 duration-200 transition-colors">LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
