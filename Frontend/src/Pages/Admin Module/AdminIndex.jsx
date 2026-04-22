import React, { useState } from 'react';

// ============================================================================
// 1. INLINE SVG ICONS (Missing icons added)
// ============================================================================
const Icons = {
  Complaints: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  AssignCases: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>,
  PoliceOfficers: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  Admin: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  Settings: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  MapPin: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  User: () => <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  Plus: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
  Search: () => <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Filter: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>,
  Eye: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Edit: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>,
  Trash: () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  // Added the two missing icons here:
  ShieldCheck: () => <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  Notifications: () => <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
};

// ============================================================================
// 2. SHARED UI COMPONENTS
// ============================================================================
const Badge = ({ text, type }) => {
  let styles = "px-3 py-1 rounded-md text-xs font-medium border text-center ";
  if (type === 'high') styles += "border-blue-500/50 text-blue-400 bg-blue-900/20";
  else if (type === 'medium') styles += "border-slate-500/50 text-slate-300 bg-[#16253B]";
  else if (type === 'low') styles += "border-slate-600 bg-transparent text-slate-400";
  else if (text === 'Pending') styles += "border-slate-500/50 text-slate-300 bg-[#16253B]";
  else if (text === 'In Progress') styles += "border-blue-500/50 text-blue-400 bg-blue-900/20";
  else if (text === 'Resolved' || text === 'Active') styles += "border-emerald-500/50 text-emerald-400 bg-emerald-900/20";
  else if (text === 'Rejected' || text === 'Inactive') styles += "border-red-500/50 text-red-400 bg-red-900/20";

  return <span className={styles}>{text}</span>;
};

// Flex-based Toggle Switch (No absolute/relative positioning!)
const ToggleSwitch = ({ active }) => (
  <button 
    className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${active ? 'bg-blue-600 justify-end' : 'bg-slate-600 justify-start'}`}
  >
    <div className="w-4 h-4 bg-white rounded-full transition-transform"></div>
  </button>
);

const InputField = ({ label, value, type = "text" }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-sm text-slate-400">{label}</label>
    <div className="flex bg-[#0B1524] border border-[#1E2D45] rounded-lg px-4 py-2.5 transition-colors focus-within:border-blue-500">
      <input type={type} defaultValue={value} className="bg-transparent border-none outline-none w-full text-sm text-white" />
    </div>
  </div>
);

// ============================================================================
// 3. TAB COMPONENTS
// ============================================================================

// --- TAB: COMPLAINTS ---
const TabComplaints = () => {
  const complaintsData = [
    { id: 'CMP-2847', user: 'Sarah Johnson', type: 'Theft', priority: 'High', status: 'Pending', officer: 'Unassigned', date: '2026-04-12' },
    { id: 'CMP-2846', user: 'Michael Chen', type: 'Fraud', priority: 'Medium', status: 'In Progress', officer: 'Off. Martinez', date: '2026-04-11' },
    { id: 'CMP-2845', user: 'Emily Davis', type: 'Assault', priority: 'High', status: 'In Progress', officer: 'Off. Thompson', date: '2026-04-11' },
    { id: 'CMP-2844', user: 'James Wilson', type: 'Vandalism', priority: 'Low', status: 'Resolved', officer: 'Off. Anderson', date: '2026-04-10' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">Complaint Management</h1>
        <p className="text-sm text-slate-400">View and manage all complaints</p>
      </div>

      {/* Filter Bar (Using Flexbox to align icon and input natively) */}
      <div className="flex flex-wrap items-center gap-4 bg-[#111C30] p-4 rounded-xl border border-[#1E2D45] mb-6">
        <div className="flex flex-1 items-center bg-[#0B1524] border border-[#1E2D45] rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition-colors min-w-[200px]">
          <Icons.Search />
          <input type="text" placeholder="Search complaints..." className="bg-transparent border-none outline-none w-full ml-3 text-sm text-white placeholder-slate-500" />
        </div>
        <select className="bg-[#0B1524] border border-[#1E2D45] text-slate-300 text-sm rounded-lg px-4 py-2.5 outline-none hover:border-blue-500 transition-colors cursor-pointer appearance-none min-w-[120px]">
          <option>All Status</option><option>Pending</option>
        </select>
        <button className="bg-[#2563EB] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors active:scale-95">
          <Icons.Filter /> Apply
        </button>
      </div>

      <div className="bg-[#111C30] rounded-xl overflow-x-auto border border-[#1E2D45]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead className="bg-[#0B1524] border-b border-[#1E2D45] text-slate-400 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Complaint ID</th><th className="px-6 py-4">User Name</th><th className="px-6 py-4">Crime Type</th>
              <th className="px-6 py-4">Priority</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Officer</th><th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2D45]">
            {complaintsData.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#16253B] transition-colors text-sm text-slate-300">
                <td className="px-6 py-4 font-medium text-blue-400 cursor-pointer hover:underline">{row.id}</td>
                <td className="px-6 py-4">{row.user}</td>
                <td className="px-6 py-4">{row.type}</td>
                <td className="px-6 py-4"><Badge text={row.priority} type={row.priority.toLowerCase()} /></td>
                <td className="px-6 py-4"><Badge text={row.status} type="status" /></td>
                <td className="px-6 py-4">{row.officer}</td>
                <td className="px-6 py-4 text-blue-500 flex justify-center gap-3">
                  <button className="hover:text-blue-300"><Icons.Eye /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- TAB: ASSIGN CASES ---
const TabAssignCases = () => {
  const unassigned = [
    { id: 'CMP-2847', user: 'Sarah Johnson', type: 'Theft', area: 'North District', date: '2026-04-12', priority: 'High' },
    { id: 'CMP-2843', user: 'Lisa Brown', type: 'Cybercrime', area: 'North District', date: '2026-04-10', priority: 'Medium' },
  ];
  
  const officers = [
    { name: 'Officer Martinez', badge: '#-4521', area: 'North District', cases: 3, status: 'Available' },
    { name: 'Officer Thompson', badge: '#-4522', area: 'North District', cases: 2, status: 'Available' },
    { name: 'Officer Williams', badge: '#-4524', area: 'South Zone', cases: 4, status: 'On Duty' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">Assign Cases</h1>
        <p className="text-sm text-slate-400">Assign unassigned complaints to available officers</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-slate-300 font-medium px-2 border-b border-[#1E2D45] pb-2">Unassigned Complaints</h2>
          {unassigned.map((item, i) => (
            <div key={i} className="bg-[#111C30] border border-[#1E2D45] border-l-4 border-l-blue-500 rounded-xl p-5 flex justify-between hover:bg-[#16253B] transition-colors cursor-pointer">
              <div className="flex flex-col gap-1.5">
                <span className="text-blue-400 font-semibold">{item.id}</span>
                <span className="text-slate-200 text-sm">{item.user}</span>
                <span className="text-slate-400 text-xs mt-1">Type: {item.type}</span>
                <span className="text-slate-400 text-xs flex items-center gap-1"><Icons.MapPin/> {item.area}</span>
                <span className="text-slate-500 text-xs">Filed: {item.date}</span>
              </div>
              <div><Badge text={item.priority} type={item.priority.toLowerCase()} /></div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-slate-300 font-medium px-2 border-b border-[#1E2D45] pb-2">Available Officers</h2>
          {officers.map((off, i) => (
            <div key={i} className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-5 flex justify-between items-center hover:bg-[#16253B] transition-colors">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-200 font-semibold">{off.name}</span>
                <span className="text-slate-400 text-xs">Badge: {off.badge}</span>
                <span className="text-slate-400 text-xs flex items-center gap-1"><Icons.MapPin/> {off.area}</span>
                <span className="text-slate-400 text-xs">Active Cases: {off.cases}</span>
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className={`text-xs font-medium ${off.status === 'Available' ? 'text-emerald-400' : 'text-amber-400'}`}>{off.status}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex gap-2 items-center transition-colors shadow-sm">
                  <Icons.Plus /> Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- TAB: POLICE OFFICERS ---
const TabPoliceOfficers = () => {
  const officers = Array(6).fill({ name: 'Officer Martinez', badge: '#-4521', area: 'Downtown', cases: 3, status: 'Active' });

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Police Officers</h1>
          <p className="text-sm text-slate-400">Manage police officers and their assignments</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex gap-2 items-center transition-colors">
          <Icons.Plus /> Add Officer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officers.map((off, i) => (
          <div key={i} className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 hover:border-blue-500/50 transition-colors flex flex-col h-full shadow-sm">
            <div className="flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <Icons.User />
                </div>
                <span className="text-slate-200 font-medium text-lg">{off.name}</span>
              </div>
              <span className="text-emerald-400 text-xs font-medium">{off.status}</span>
            </div>
            <div className="flex flex-col gap-2 mb-8 text-sm text-slate-400">
              <span>Badge: <span className="text-slate-300">{off.badge}</span></span>
              <span>Area: <span className="text-slate-300">{off.area}</span></span>
              <span>Active Cases: <span className="text-slate-300">{off.cases}</span></span>
            </div>
            <div className="flex gap-3 mt-auto pt-4 border-t border-[#1E2D45]">
              <button className="flex-1 border border-[#1E2D45] text-slate-300 hover:bg-[#1E2D45] hover:text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                <Icons.Edit /> Edit
              </button>
              <button className="flex-1 border border-red-900/50 text-red-400 hover:bg-red-900/20 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                <Icons.Trash /> Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- TAB: ADMIN MANAGEMENT ---
const TabAdminManagement = () => {
  const admins = [
    { id: 'ADM-001', name: 'John Smith', email: 'john.smith@ecrime.gov', role: 'Super Admin', status: 'Active', login: '2026-04-12 10:30' },
    { id: 'ADM-002', name: 'Emma Wilson', email: 'emma.wilson@ecrime.gov', role: 'Sub Admin', status: 'Active', login: '2026-04-12 09:15' },
    { id: 'ADM-004', name: 'Sarah Davis', email: 'sarah.davis@ecrime.gov', role: 'Sub Admin', status: 'Inactive', login: '2026-04-08 14:20' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Admin Management</h1>
          <p className="text-sm text-slate-400">Manage administrator accounts and permissions</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex gap-2 items-center transition-colors">
          <Icons.Plus /> Add Admin
        </button>
      </div>

      <div className="bg-[#111C30] rounded-xl overflow-x-auto border border-[#1E2D45]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead className="bg-[#0B1524] border-b border-[#1E2D45] text-slate-400 uppercase text-xs font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Admin ID</th><th className="px-6 py-4">Name</th><th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Last Login</th><th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E2D45]">
            {admins.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#16253B] transition-colors text-sm text-slate-300">
                <td className="px-6 py-4 font-medium text-blue-400">{row.id}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4"><span className="text-blue-400 bg-blue-900/20 px-2 py-1 rounded text-xs">{row.role}</span></td>
                <td className="px-6 py-4"><Badge text={row.status} type="status" /></td>
                <td className="px-6 py-4 text-slate-400">{row.login}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-400"><Icons.Edit /></button>
                  <button className="text-red-500 hover:text-red-400"><Icons.Trash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- TAB: SETTINGS ---
const TabSettings = () => {
  return (
    <div className="flex flex-col h-full pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">Settings</h1>
        <p className="text-sm text-slate-400">System configuration preferences and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1: Profile */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.User /> <h2 className="text-lg font-medium text-white">Profile Settings</h2>
          </div>
          <div className="flex flex-col gap-5">
            <InputField label="Full Name" value="Admin User" />
            <InputField label="Email Address" value="admin@ecrime.gov" type="email" />
            <InputField label="Phone Number" value="+1 (555) 123-4567" />
            <button className="bg-[#1E2D45] hover:bg-blue-600 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-2">
              Update Profile
            </button>
          </div>
        </div>

        {/* Card 2: Security */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.Admin /> <h2 className="text-lg font-medium text-white">Security</h2>
          </div>
          <div className="flex flex-col gap-5">
            <InputField label="Current Password" type="password" value="********" />
            <InputField label="New Password" type="password" />
            <InputField label="Confirm Password" type="password" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-2">
              Change Password
            </button>
          </div>
        </div>

        {/* Card 3: Notifications */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.Notifications /> <h2 className="text-lg font-medium text-white">Notifications</h2>
          </div>
          <div className="flex flex-col">
            {[
              { t: 'New Complaints', d: 'Get notified when new complaints are filed', on: true },
              { t: 'Case Assignments', d: 'Notify when assigned to new cases', on: true },
              { t: 'Status Updates', d: 'Get updates on case status changes', on: false },
              { t: 'System Alerts', d: 'Receive critical alerts for system events', on: true },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b border-[#1E2D45] last:border-0 last:pb-0">
                <div className="flex flex-col pr-4">
                  <span className="text-slate-200 text-sm font-medium">{item.t}</span>
                  <span className="text-slate-500 text-xs mt-1 leading-relaxed">{item.d}</span>
                </div>
                <ToggleSwitch active={item.on} />
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: System Prefs */}
        <div className="bg-[#111C30] border border-[#1E2D45] rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-[#1E2D45] pb-4">
            <Icons.Settings /> <h2 className="text-lg font-medium text-white">System Preferences</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">Auto-Assign Cases</span>
              <ToggleSwitch active={false} />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-slate-400">Default Priority</label>
              <div className="flex bg-[#0B1524] border border-[#1E2D45] rounded-lg px-4 py-2.5 focus-within:border-blue-500 transition-colors">
                <select className="bg-transparent border-none outline-none w-full text-sm text-white appearance-none cursor-pointer">
                  <option>Medium</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-slate-400">Session Timeout (minutes)</label>
              <div className="flex bg-[#0B1524] border border-[#1E2D45] rounded-lg px-4 py-2.5 focus-within:border-blue-500 transition-colors">
                <input type="number" defaultValue="30" className="bg-transparent border-none outline-none w-full text-sm text-white" />
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-auto">
              Save Preferences
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const AdminIndex = () => {
const [activeTab, setActiveTab] = useState('Complaints');

  const tabs = [
    { id: 'Complaints', icon: Icons.Complaints },
    { id: 'Assign Cases', icon: Icons.AssignCases },
    { id: 'Police Officers', icon: Icons.PoliceOfficers },
    { id: 'Admin Management', icon: Icons.Admin },
    { id: 'Settings', icon: Icons.Settings },
  ];


  return (
    <div>
        <div className="flex h-screen bg-[#060D18] font-sans text-white overflow-hidden">
      
     
      <aside className="w-[260px] shrink-0 bg-[#060D18] border-r border-[#1E2D45] flex flex-col py-6 px-4 gap-2 z-10 overflow-y-auto fixed rounded-2xl ">
        

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive ? 'bg-[#1E3A5F] text-white shadow-sm' : 'text-slate-400 hover:bg-[#16253B] hover:text-slate-200'
              }`}
            >
              <Icon />
              <span className="text-sm font-medium tracking-wide">{tab.id}</span>
            </div>
          );
        })}
      </aside>

      {/* Main Content Area: flex-1 fills remaining width */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0B1524] overflow-y-auto pl-65">
        <div className="p-8 max-w-[1600px] w-full mx-auto h-full">
          {activeTab === 'Complaints' && <TabComplaints />}
          {activeTab === 'Assign Cases' && <TabAssignCases />}
          {activeTab === 'Police Officers' && <TabPoliceOfficers />}
          {activeTab === 'Admin Management' && <TabAdminManagement />}
          {activeTab === 'Settings' && <TabSettings />}
        </div>
      </main>

    </div>
    </div>
  )
}

export default AdminIndex