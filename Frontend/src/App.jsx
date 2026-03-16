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

const App = () => {
  return (
    <div className='bg-[url("https://i.pinimg.com/736x/52/af/96/52af968e07c64ba7d4d33335399126bb.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed overflow-y-auto fixed w-full '>
      <Navbar />
     <div className='pt-21' >
        
       
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/LogIn' element={<LogIn/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/' element={<First/>}></Route>
        <Route path='/ComplaintRegister' element={<Complaint/>}></Route>
      </Routes>
     </div>
     <Footer/>
    </div>
  )
}

export default App