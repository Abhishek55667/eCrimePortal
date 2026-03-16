import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-950 bg-blend-darken text-teal-50 flex justify-between px-5 py-6 bg-[url("https://i.pinimg.com/736x/52/af/96/52af968e07c64ba7d4d33335399126bb.jpg")] bg-cover bg-no-repeat bg-center fixed w-screen top-0 border-b-2'>
        <div className='text-3xl font-bold'>
            <h1>eCrime Portal</h1>
        </div>
        <div className='font-bold flex justify-center gap-9 text-2xl'>
           <Link to={'/Home'} >Home</Link>
           <Link to={'/About'}>About</Link>
            <Link to={'/Services'}>Services</Link>
            <Link to={'/ContactUs'}>Contact Us</Link>
            
        </div>
    </div>
  )
}

export default Navbar