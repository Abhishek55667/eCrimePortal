import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
const Footer = () => {
    return (
        <div className='text- w-full '>

        <div className=' bg-[url("https://i.pinimg.com/1200x/32/93/72/3293723b8684b819b9ce85db7cf7ad32.jpg")] pb-5 bg-no-repeat  bg-center bg-cover'>
             <div className='flex justify-between mb-8 px-9 pt-5'>

                <div className='mt-8'>
                    <h1 className='font-bold text-3xl'>eCrime</h1>
                    <p className='font-bold text-xl'>PORTAL</p>
                </div>
                <div className='font-bold '>
                    <h2 className='border-b-2 pb-2'>FOLLOW US</h2>
                    
                    <div className='flex gap-2 pt-2'><FaInstagram /><h3 className='text-xs pt-1'>INSTAGRAM</h3></div>
                    <div className='flex gap-2'><FaFacebook /><h3 className='text-xs pt-1'>FACEBOOK</h3></div>
                    <div className='flex gap-2'><IoLogoTwitter /><h3 className='text-xs pt-1'>TWITTER</h3></div>
                    <div className='flex gap-2'><IoLogoLinkedin /><h3 className='text-xs pt-1'>LINKENDIN</h3></div>
                </div>

                <div className='font-bold '>
                    <h2 className='border-b-2 pb-2'>
                        ABOUT DEVELOPER'S
                    </h2>
                    <h3 className='pt-2'>CONTACT US</h3>
                    <h3>ABOUT US</h3>
                    <h3>RESOURCE USED</h3>
                    <h3>AFFILIATE</h3>
                </div>

                <div className='font-bold pr-4'>
                    <h1 className='border-b-2 pb-2'>
                        HELP DESK
                    </h1>

                    <div className='flex gap-2 pt-2'><IoMdHelpCircle /><h3 className='text-xs pt-1'>Help</h3></div>
                     <div className='flex gap-2'><MdFeedback /><h3 className='text-xs pt-1'>Feedback</h3></div>

                </div>



            </div>


            <div>
                <div className='border-t-2 justify-end'>
                    <h1 className='font-extrabold text-2xl text-center pb-3'>
                        --EMERGENCY DIALS--
                    </h1>
                </div>
                <div className='flex text-center'>
                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>AMBULANCE</h2>
                        <p>Dial-108</p>
                    </div>

                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>POLICE</h2>
                        <p>Dial-112</p>
                    </div>
                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>WOMEN POWER LINE</h2>
                        <p>Dial-1090</p>
                    </div>

                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>CYBER CRIME</h2>
                        <p>Dial-1950</p>
                    </div>

                    

                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>SUICIDE PREVENTION</h2>
                        <p>Dial-14416</p>
                    </div>

                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>CHILD HELPLINE</h2>
                        <p>Dial-1098</p>
                    </div>

                    <div className='w-1/7'>
                        <h2 className='text-xl font-bold'>FIRE BRIGADE</h2>
                        <p>Dial-101</p>
                    </div>
                </div>
            </div>

        </div>
           
        </div>
    )
}

export default Footer