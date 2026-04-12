import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import ContactUs from './Pages/ContactUs'
import About from './Pages/About'
import Services from './Pages/Services'
import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
import First from './Pages/First'
import Footer from './Components/Footer'
import Complaint from './Pages/Complaint'
import TrackComplaint from './Pages/TrackComplaint'
import Top from './Pages/Top'
import Police from './Pages/police'
import ComplaintDetails from './Pages/Police module/ComplaintDetails'
import TrackComplaintFirst from './Pages/Police module/TrackComplaintFirst'
import UpdateComplaint from './Pages/Police module/UpdateComplaint'
import PoliceLogIn from './Pages/Police module/PoliceLogIn'

const App = () => {
  return (
    <div className='bg-[url("https://i.pinimg.com/736x/52/af/96/52af968e07c64ba7d4d33335399126bb.jp")] h-screen bg-cover bg-no-repeat bg-center bg-fixed overflow-y-auto fixed w-full '>
      <Navbar />
     <div className='pt-21 ' >
        
       
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/LogIn' element={<LogIn/>}></Route>
        <Route path='/Top' element={<Top/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
         <Route path='/police' element={<Police/>}></Route>
        <Route path='/' element={<First/>}></Route>
        <Route path='/Complaint' element={<Complaint/>}></Route>
        <Route path='/TrackComplaint' element={<TrackComplaint/>}></Route>
        <Route path='/ComplaintDetails' element={<ComplaintDetails/>}></Route>
         <Route path='/TrackComplaintFirst' element={<TrackComplaintFirst/>}></Route>
         <Route path='/UpdateComplaint' element={<UpdateComplaint/>}></Route>
          <Route path='/PoliceLogIn' element={<PoliceLogIn/>}></Route>
      
      </Routes>
     </div>
     <Footer/>
    </div>
  )
}

export default App