import React from 'react'

const Footer = () => {
    return (
        <div className='text-white w-full '>

        <div className=' bg-radial-[at_50%_75%] from-sky-950 via-blue-800 to-blue-950 to-90% pb-5'>
             <div className='flex justify-between mb-8 px-9 pt-5'>

                <div className='mt-8'>
                    <h1 className='font-bold text-3xl'>logo</h1>
                    <p className='font-bold text-xl'>ABOUT COMPANY</p>
                </div>
                <div className='font-bold '>
                    <h2 className='border-b-2 pb-2'>FOLLOW US</h2>
                    <h3 className='text-xs pt-2'>INSTAGRAM</h3>
                    <h3 className='text-xs pt-1'>FACEBOOK</h3>
                    <h3 className='text-xs pt-1'>TWITTER</h3>
                    <h3 className='text-xs pt-1'>LINKEDIN</h3>
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

                    <h2 className='pt-2'>Help</h2>
                    <h3>Feedback</h3>

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