import React, { useState } from 'react'


const InfoItem = ({ label, value }) => (
  <div className="space-y-1 hover:translate-x-1 transition duration-200">
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-lg font-semibold text-gray-800">{value}</p>
  </div>
);

const FileBadge = ({ name }) => (
  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-orange-50 hover:scale-105 transition duration-200 cursor-pointer">
    <span className="text-orange-500">📄</span>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);




const TimelineItem = ({ color, title, officer, description, date, time }) => {
 

  return (
    <div className=" pl-16 group">
    
      

      {/* Content */}
      <div className="bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition duration-300">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">By {officer}</p>
          </div>

          <div className="text-right min-w-[140px]">
            <p className="font-semibold text-gray-800">{date}</p>
            <p className="text-sm text-gray-500">{time}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
};





//   const [notes, setNotes] = useState("");

//   const handleSubmit = () => {
//     alert("Update Added:\n" + notes);
//     setNotes("");
//   };





const ComplaintDetails = () => {
  return (





    <div>
 <div className=" bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Complaint Details
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-8 flex justify-between gap-10 hover:shadow-xl transition duration-300">
        
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6">

          {/* Case ID */}
          <div>
            <p className="text-gray-500 text-sm">Case ID</p>
            <h2 className="text-xl font-semibold text-gray-800">
              EC-2026-045678
            </h2>
          </div>

          {/* Complaint Title */}
          <div>
            <p className="text-gray-500 text-sm">Complaint Title</p>
            <h2 className="text-xl font-semibold text-gray-800">
              Online Banking Fraud - Unauthorized Transaction
            </h2>
          </div>

          {/* Crime Type / Date / Priority */}
          <div className="flex gap-16 flex-wrap">

            <div>
              <p className="text-gray-500 text-sm">Crime Type</p>
              <p className="text-lg font-medium">Cyber Fraud</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Date Filed</p>
              <p className="text-lg font-medium">March 28, 2026</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Priority</p>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                HIGH
              </span>
            </div>

          </div>

          {/* Status */}
          <div>
            <p className="text-gray-500 text-sm mb-2">Status</p>
            <span className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
              In Progress
            </span>
          </div>

        </div>

        {/* RIGHT SECTION (Buttons) */}
        <div className="flex flex-col gap-4 min-w-[220px]">

          <button className="bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 hover:scale-105 transition duration-300">
            Update Status
          </button>

          <button className="border border-orange-500 text-orange-500 py-2 rounded-lg font-medium hover:bg-orange-50 hover:scale-105 transition duration-300">
            Assign Task
          </button>

          <button className="border border-green-500 text-green-600 py-2 rounded-lg font-medium hover:bg-green-50 hover:scale-105 transition duration-300">
            Mark as Resolved
          </button>

        </div>
      </div>
    </div>





<div className=" bg-gray-100 p-8">
      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT CARD — Complainant Details */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-orange-500 mb-8">
            Complainant Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <InfoItem label="Name" value="Rajesh Kumar Sharma" />
            <InfoItem label="Contact Number" value="+91 98765 43210" />
            <InfoItem label="Email" value="rajesh.sharma@email.com" />
            <InfoItem
              label="Address"
              value="123, Green Park Extension, Sector 21, New Delhi - 110016"
            />
          </div>
        </div>

        {/* RIGHT CARD — Complaint Description */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col">
          <h2 className="text-2xl font-semibold text-orange-500 mb-6">
            Complaint Description
          </h2>

          <p className="text-gray-700 leading-relaxed text-[15px]">
            On March 25, 2026, at approximately 2:30 PM, I noticed unauthorized
            transactions totaling ₹85,000 from my savings account (Account No:
            XXXX1234) at State Bank. The transactions were made through an
            online banking portal which I did not initiate. I immediately
            contacted the bank and reported the incident. The bank has
            temporarily frozen my account. I received suspicious SMS messages
            claiming to be from the bank asking for OTP verification, which I
            now suspect was a phishing attempt. I have preserved all SMS records
            and email communications as evidence.
          </p>

          {/* Evidence Section */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-800 mb-4">
              📎 Attached Evidence
            </h3>

            <div className="flex flex-wrap gap-4">
              <FileBadge name="bank_statement.pdf" />
              <FileBadge name="suspicious_sms_screenshot.jpg" />
              <FileBadge name="bank_complaint_receipt.pdf" />
            </div>
          </div>
        </div>

      </div>
    </div>



<div className="bg-gray-100  p-8">
      <div className="bg-white rounded-2xl shadow-md p-10">
        <h2 className="text-2xl font-semibold text-orange-500 mb-10">
          Police Action Timeline
        </h2>

        <div className="space-y-12">
          <TimelineItem
            color="orange"
            title="Case Registered"
            officer="Inspector Priya Mehta"
            description="Complaint registered and initial FIR filed. Case assigned to Cyber Crime Cell."
            date="March 28, 2026"
            time="10:30 AM"
          />

          <TimelineItem
            color="blue"
            title="Visited Complainant Location"
            officer="Sub-Inspector Amit Singh"
            description="Visited complainant residence to collect additional evidence and record detailed statement. Collected mobile phone for forensic analysis of phishing messages."
            date="March 29, 2026"
            time="2:15 PM"
          />

          <TimelineItem
            color="green"
            title="Evidence Collected"
            officer="Inspector Priya Mehta"
            description="Obtained bank transaction records, CCTV footage from ATM locations, and server logs from the bank. Forensic team analyzing digital footprints."
            date="March 30, 2026"
            time="11:00 AM"
          />

          <TimelineItem
            color="orange"
            title="Investigation Update"
            officer="Inspector Priya Mehta"
            description="Traced IP address to a location in Mumbai. Coordinating with Mumbai Police Cyber Cell for further investigation. Suspect identified through digital forensics."
            date="April 2, 2026"
            time="9:45 AM"
          />
        </div>
      </div>
    </div>


 <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white rounded-2xl shadow-md p-10 transition duration-300 hover:shadow-xl">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-orange-500 mb-8">
          Add New Action / Update
        </h2>

        {/* Label */}
        <label className="block text-lg font-medium text-gray-700 mb-3">
          Action Notes
        </label>

        {/* Textarea */}
        <textarea
          
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter action details, notes, or updates here..."
          rows={6}
          className="w-full rounded-xl border border-gray-300 p-5 text-gray-700 text-[15px] resize-none
                     focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
                     transition duration-300 hover:shadow-md"
        />

        {/* Button */}
        <button
          
          className="mt-8 flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-xl
                     shadow-md hover:bg-orange-600 hover:shadow-lg active:scale-95
                     transition duration-300"
        >
          <span className="text-xl">＋</span>
          Add Update
        </button>
      </div>
    </div>


    </div>
  )
}

export default ComplaintDetails