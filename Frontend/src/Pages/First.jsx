import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className=''>





       <div className='flex w-full h-screen '>

        <div className=' w-1/2 pt-40 px-15'>
         <h2 className='text-6xl font-bold text-white'>
            eCrime Portal
         </h2>
         <p className='p-10 text-blue-50'>
            This portal is an initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only with special focus on cyber crimes against women and children. Complaints reported on this portal are dealt by law enforcement agencies/ police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing complaint for prompt action.
         </p>
         <div className='flex gap-15'>
            <button className='px-15 py-3 bg-blue-500 font-bold text-xl rounded-2xl'><Link to={'/LogIn'}>Login</Link></button>
            <button className='px-15 py-3 bg-gray-400 font-bold text-xl  rounded-2xl'><Link to={'/Register'}>Register</Link></button>
            

         </div>
        </div>
        <div className=' w-1/2 '>
                <div className='pt-30 p-10 mt-5'>
                    <img src="https://i.pinimg.com/736x/ed/65/51/ed6551a462c2d2b6955bbe139a5ef86b.jpg" alt="" className='rounded-2xl'/>
                    
                </div>
        </div>

       </div>

    </div>
  )
}

export default First