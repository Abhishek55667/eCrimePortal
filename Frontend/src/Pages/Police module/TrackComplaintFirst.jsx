import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Inline SVG Icons ---
const SearchCheckIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5l2.25 2.25 4.5-4.5" />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const HelpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Main Component ---
const TrackComplaintFirst = () => {
  // State and handlers must be inside the component that renders them
  const [complaintId, setComplaintId] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if(complaintId) {
      console.log('Tracking Complaint ID:', complaintId);
      // Navigation or API call logic here
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col font-sans ">
      
      {/* Top Blue Header Section */}
      <div className="bg-gradient-to-r from-[#0F47DB] via-[#1A56FF] to-[#0F47DB] py-20 px-6 flex flex-col items-center justify-center text-center">
        
        {/* Icon Container */}
        <div className="bg-white/10 border border-white/20 p-4 rounded-full mb-6 backdrop-blur-sm shadow-inner cursor-default hover:bg-white/20 transition-colors duration-300">
          <SearchCheckIcon className="w-10 h-10 text-white" />
        </div>
        
        {/* Headings */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Track Your Complaint
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light">
          Enter your complaint ID to check the latest status and progress
        </p>
      </div>

      {/* Bottom White Search Section */}
      <div className="flex-1 bg-white pt-12 px-6 pb-24 flex flex-col items-center">
        
        <form onSubmit={handleTrack} className="w-full max-w-3xl space-y-5">
          
          {/* Input Area */}
          <div className="">
            <div className=" inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <SearchIcon className="w-6 h-6 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-200" />
            </div>
            <input
              type="text"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
              className="block w-full pl-14 pr-6 py-4 bg-[#F8FAFC] border border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all text-lg shadow-sm hover:border-gray-200"
              placeholder="Enter Complaint ID (e.g., EC2026001234)"
              required
            />
          </div>

          {/* Action Button */}
          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#E60000] hover:bg-[#CC0000] text-white py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <SearchIcon className="w-6 h-6" />
           <Link to={'/TrackComplaint'}> Track Now</Link>
          </button>

          {/* Footer Link */}
          <div className="text-center pt-4">
            <span className="text-gray-600">Don't have a Complaint ID? </span>
            
              <Link to={'/UserMain/Complaint'} className='text-[#0F47DB] hover:text-blue-800 font-medium hover:underline transition-colors duration-200'>Register a new complaint</Link>
            
          </div>

        </form>
      </div>

      {/* Floating Help Button (Bottom Right) */}
      <button 
        className="fixed bottom-6 right-6 bg-[#1A1A1A] hover:bg-black text-gray-300 hover:text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 group z-50"
        title="Help & Support"
      >
        <HelpIcon className="w-6 h-6" />
      </button>

    </div>
    </div>
  )
}

export default TrackComplaintFirst;