import React from "react";
import { MdDriveFileMove } from "react-icons/md";
function Detail({ label, value }) {
  return (
    <div className="group transition">
      <p className="text-gray-500 text-sm">{label}</p>
      <p
        className="text-lg font-semibold text-gray-900
                   group-hover:text-blue-700 transition"
      >
        {value}
      </p>
    </div>
  );
}

const steps = [
    {
      id: 1,
      title: 'Complaint Submitted',
      date: '01 Apr 2026',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Under Review',
      date: '02 Apr 2026',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Investigation',
      date: '03 Apr 2026',
      status: 'current',
      label: 'In Progress',
    },
    {
      id: 4,
      title: 'Action Taken',
      date: '',
      status: 'pending',
    },
    {
      id: 5,
      title: 'Closed / Resolved',
      date: '',
      status: 'pending',
    },
  ]
const TrackComplaint = () => {
  return (
    <div>
       <div className="  p-8 flex justify-center items-start">
      <div
        className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-10
                   transition duration-300 hover:shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Complaint Details
          </h1>

          <span
            className="px-4 py-2 text-sm font-medium rounded-full
                       bg-blue-100 text-blue-700
                       transition hover:bg-blue-600 hover:text-white"
          >
            Under Investigation
          </span>
        </div>

        {/* Grid Info */}
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 text-gray-700">
          {/* Left Column */}
          <div className="space-y-8">
            <Detail label="Complaint ID" value="EC2026001234" />
            <Detail label="Date Submitted" value="01 April 2026" />
            <Detail label="Assigned Officer" value="Inspector Rajesh Kumar" />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Detail label="Complaint Type" value="Cyber Fraud" />
            <Detail label="Current Status" value="Under Investigation" />
            <Detail label="Police Station" value="Cyber Crime Cell, Delhi" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-gray-500 text-sm mb-2">Description</p>
          <p
            className="text-gray-800 leading-relaxed bg-gray-50 p-5 rounded-lg
                       transition hover:bg-blue-50"
          >
            Reported fraudulent transaction of ₹50,000 through phishing email.
            The suspect impersonated a bank official and obtained sensitive
            banking credentials.
          </p>
        </div>
      </div>
    </div>




<div className=" bg-gray-50 p-8 flex justify-center items-start">
      {/* Main Card Container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Complaint Progress
        </h2>

        <div className="flow-root">
          <ul className="-mb-8">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;

              return (
                <li key={step.id}>
                  {/* Hover effect added to this container */}
                  <div className="relative pb-10 group cursor-pointer transition-all duration-200 hover:bg-gray-50 rounded-lg p-2 -ml-2">
                    
                    {/* Vertical Connecting Line */}
                    {!isLast ? (
                      <span
                        className={`absolute left-[1.6rem] top-12 -ml-px h-[calc(100%-2rem)] w-0.5 ${
                          step.status === 'completed'
                            ? 'bg-blue-600'
                            : 'bg-gray-200'
                        }`}
                        aria-hidden="true"
                      />
                    ) : null}

                    <div className="relative flex items-start space-x-4">
                      {/* Icon Container */}
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                        {step.status === 'completed' && (
                          <div className="h-10 w-10 rounded-full bg-[#10b981] flex items-center justify-center transition-transform group-hover:scale-110">
                            {/* Checkmark Icon */}
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                        )}
                        
                        {step.status === 'current' && (
                          <div className="h-10 w-10 rounded-full bg-[#2563eb] flex items-center justify-center transition-transform group-hover:scale-110">
                            {/* Clock Icon */}
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        )}
                        
                        {step.status === 'pending' && (
                          <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center transition-colors group-hover:border-gray-300">
                            {/* Exclamation Icon */}
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="min-w-0 flex-1 pt-1.5 transition-transform duration-200 group-hover:translate-x-1">
                        <p
                          className={`text-[15px] font-medium ${
                            step.status === 'pending'
                              ? 'text-gray-400'
                              : 'text-gray-900'
                          }`}
                        >
                          {step.title}
                        </p>
                        
                        {step.date && (
                          <p className="mt-1 text-[13px] text-gray-500">
                            {step.date}
                          </p>
                        )}
                        
                        {step.label && (
                          <p className="mt-1 text-[13px] font-medium text-blue-600">
                            {step.label}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrackComplaint;
