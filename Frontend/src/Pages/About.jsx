import React from 'react';
import { Link } from 'react-router-dom';

// --- Reusable Inline SVG Icons ---
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    eye: <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
    user: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
    badgeCheck: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
    bell: <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />,
    database: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75C20.25 20.153 16.556 22 12 22s-8.25-1.847-8.25-4.125v-3.75m-16.5-3.75C3.75 12.353 7.444 14 12 14s8.25-1.847 8.25-4.125" />,
    lock: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
    document: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
    arrowRight: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  };
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {icons[name]}
    </svg>
  );
};

// --- Data ---
const features = [
  { id: 1, title: 'Secure Complaint Registration', desc: 'End-to-end encrypted complaint submission with data protection', icon: 'shield' },
  { id: 2, title: 'Real-time Case Tracking', desc: 'Track your complaint status and updates in real-time', icon: 'eye' },
  { id: 3, title: 'Admin Case Assignment', desc: 'Intelligent case routing to appropriate departments', icon: 'users' },
  { id: 4, title: 'Priority-based Handling', desc: 'Automatic prioritization based on severity and urgency', icon: 'bell' },
  { id: 5, title: 'Notification System', desc: 'Instant alerts on case progress and status changes', icon: 'database' },
  { id: 6, title: 'Data Privacy & Security', desc: 'Military-grade encryption and secure data storage', icon: 'lock' },
];

const steps = [
  { id: 1, title: 'Submit Complaint', desc: 'User files a complaint with complete details', icon: 'document' },
  { id: 2, title: 'Admin Verifies', desc: 'Admin reviews and validates the complaint', icon: 'badgeCheck' },
  { id: 3, title: 'Case Assigned', desc: 'Complaint assigned to relevant police officer', icon: 'users' },
  { id: 4, title: 'Investigation', desc: 'Police investigates and updates progress', icon: 'eye' },
  { id: 5, title: 'Case Resolved', desc: 'Final resolution and case closure', icon: 'badgeCheck' },
];


const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      
      {/* 1. Hero Banner */}
      <section className="bg-[#0F172A] py-20 px-6 sm:px-12 lg:px-24 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              About eCrimePortal
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              A digital platform designed to simplify cybercrime reporting and enhance coordination between citizens and law enforcement.
            </p>
            <button className="bg-[#2A85FF] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
             <Link to={'/UserMain/Complaint'}> Register Complaint</Link>
            </button>
          </div>
          {/* Simulated Image Placeholder with Flex */}
          <div className="bg-[#1E293B] rounded-2xl h-[300px] lg:h-[400px] flex items-center justify-center  border border-slate-700 shadow-2xl">
            <div className="  w-full h-full p-4">
             <img src="https://i.pinimg.com/1200x/36/7e/a6/367ea6a970a45194410ebe6dcb3e3a86.jpg" alt=""  className=' rounded-2xl w-full h-full'/>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About the Platform */}
      <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-6">About the Platform</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              <span className="font-bold text-gray-900">eCrimePortal</span> is a comprehensive digital solution designed to bridge the gap between citizens and law enforcement agencies in reporting and managing cybercrime cases.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              In today's digital age, cybercrimes are rapidly increasing, yet reporting mechanisms remain fragmented and inefficient. Our platform addresses this challenge by providing a centralized, secure, and user-friendly system for cybercrime reporting.
            </p>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Key Benefits:</h3>
            <ul className="space-y-3">
              {[
                'Simplified complaint registration process',
                'Real-time case tracking and status updates',
                'Enhanced coordination between police and citizens',
                'Secure data handling with encryption',
                'Priority-based case assignment'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Simulated Right Image */}
          <div className="bg-slate-100 rounded-2xl h-[400px] flex items-center justify-center shadow-inner border border-gray-200 text-slate-400">
           <img src="https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjEwMTMwNnww&ixlib=rb-4.1.0&q=80&w=1080" className='rounded-2xl' alt="" />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card (Hover handled via transform -translate-y) */}
          <div className="bg-[#1A2538] rounded-2xl p-10 hover: transition-transform duration-300 shadow-lg">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-6">
              <Icon name="shield" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To provide a reliable and secure platform for reporting and resolving cybercrime efficiently, ensuring every citizen has access to swift justice and protection in the digital world.
            </p>
          </div>
          {/* Vision Card (Hover handled via transform -translate-y) */}
          <div className="bg-[#1A73E8] rounded-2xl p-10 hover: transition-transform duration-300 shadow-lg">
            <div className="w-14 h-14 bg-white text-[#1A73E8] rounded-xl flex items-center justify-center mb-6">
              <Icon name="eye" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To build a safer digital ecosystem by strengthening collaboration between citizens and law enforcement agencies, creating a future where cybercrime is efficiently detected, reported, and resolved.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Who Can Use This Platform */}
      <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">Who Can Use This Platform</h2>
          <p className="text-gray-500 mb-16 text-lg">Designed for multiple stakeholders in the cybercrime reporting ecosystem</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="user" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Citizens / Users</h3>
              <p className="text-gray-500 text-sm">Report cybercrime incidents and track complaint status</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="w-20 h-20 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="badgeCheck" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Police Officers</h3>
              <p className="text-gray-500 text-sm">Investigate assigned cases and update progress</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover: hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="shield" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Admin Authorities</h3>
              <p className="text-gray-500 text-sm">Manage, verify, and assign complaints efficiently</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Features */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">Key Features</h2>
          <p className="text-gray-500 mb-16 text-lg">Powerful capabilities designed to streamline cybercrime reporting and management</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white border border-gray-100 rounded-2xl p-8 hover:hover:border-blue-200 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How the System Works (Horizontal Timeline WITHOUT absolute/relative) */}
      <section className="bg-slate-50 py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">How the System Works</h2>
          <p className="text-gray-500 mb-16 text-lg">Simple 5-step process from complaint to resolution</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center">
                
                {/* Timeline Row (No Absolute/Relative!) */}
                <div className="flex items-center w-full mb-8">
                  {/* Left connecting line */}
                  <div className={`h-[3px] flex-1 ${idx === 0 ? 'bg-transparent' : 'bg-blue-500'}`}></div>
                  
                  {/* Step Icon and Number Badge */}
                  <div className="flex items-start shrink-0">
                    <div className="w-16 h-16 bg-[#1A73E8] text-white rounded-full flex items-center justify-center border-4 border-white shadow-md z-10">
                      <Icon name={step.icon} className="w-7 h-7" />
                    </div>
                    {/* Native overlapping using negative margin */}
                    <div className="w-7 h-7 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-xs font-bold -ml-4 -mt-2 shadow-sm z-20">
                      {step.id}
                    </div>
                  </div>

                  {/* Right connecting line */}
                  <div className={`h-[3px] flex-1 ${idx === steps.length - 1 ? 'bg-transparent' : 'bg-blue-500'}`}></div>
                </div>

                {/* Content Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover: transition-all duration-300 w-full h-full text-center">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section className="bg-gradient-to-r from-[#1A56FF] to-[#0F47DB] py-20 px-6 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Take a step towards a safer digital world
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Report cybercrime incidents quickly and securely
          </p>
          <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
           <Link to={'/UserMain/Complaint'}> Report a Crime Now</Link> <Icon name="arrowRight" className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  )
}

export default About;