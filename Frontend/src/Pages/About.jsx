import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const mapStyle={
  margin:'70px',
width:'90%',
height:'500px'

}
// const locations = [
//   { lat: 29.6139, lng: 79.2090 }, 
//   { lat: 27.0066, lng: 80.9202 },
//   { lat: 28.7041, lng: 77.1025 }, 
//   { lat: 26.4499, lng: 80.3319 }, 
// ];

// const Navbar = () => {
//   const [dropdown, setDropdown] = useState(false);
// }

const About = () => {


const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/Home");
  }


  return (
    // <div>



  
       
    //   About
    //   <div className='static'>
    //     <LoadScript  googleMapsApiKey='AIzaSyDxE14a8ZbgJ8y7X1xNHn9qba0bVdeODVg'>
    //   <GoogleMap zoom={6} center={locations[0]} mapContainerStyle={mapStyle}>
    //     {locations.map((loc,idx)=>(
    //       <Marker key={idx} position={loc}/>
    //     ))}
    //   </GoogleMap>
    //   </LoadScript>
    //   </div>


    //   </div>
    <div className='mt-15'>
          <div className='pb-4'>
            <h1 className='text-center  font-extrabold text-5xl mt-10'>About us</h1>
            <div className='w-full flex justify-center p-2'>
              <p className=' text-center text-xl w-120'>
              We are ready to provide the right solution according to your need.
            </p>
            </div>
            
          </div>
          <div className='  rounded-2xl text-black  ml-17 h-140 w-18/20 mb-10 flex  '>
            <div className='w-1/2 bg-blue-200 rounded-l-2xl h-full p-10'>
              <h1 className='text-3xl font-bold  pt-5 '>
                Get In Touch
              </h1>
              <p className='p-2 text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga doloremque veniam, deserunt fugiat ipsum id tenetur unde.
              </p>
              <div className='flex'>
                <div className=' pt-6'>
                  <FaLocationDot  className='text-4xl p-1 bg-blue-700 rounded-4xl' />
                </div>
    
                <div className='p-3'>
                  <h3 className='font-bold'>Location</h3>
                  <p className='text-xs'>abcsjnnj@gmail.com</p>
                  <p className='text-xs'>hjhgjgjh@gmail.com</p>
                </div>
                
    
              </div>
               <div className='flex'>
                <div className=' pt-6'>
                  <MdEmail className='text-4xl p-1 bg-blue-700 rounded-4xl' />
                </div>
    
                <div className='p-3'>
                  <h3 className='font-bold'>Email Us</h3>
                  <p className='text-xs'>abcsjnnj@gmail.com</p>
                  <p className='text-xs'>hjhgjgjh@gmail.com</p>
                </div>
    
              </div>
    
              <div className=' flex'>
    
                <div className='pt-6 '>
    
                  <MdPhoneInTalk className='text-4xl p-1 bg-blue-700 rounded-4xl' />
    
                </div>
                <div className='p-3'>
                  <h3 className='font-bold'>Contact Us</h3>
                  <p className='text-xs'>91-7912374821</p>
                  <p className='text-xs'>91-8292697378</p>
                </div>
    
              </div>
              <div className='p-3'>
                <h2 className='font-bold  '>Follow sur social media</h2>
                <div className='pt-2 flex gap-4'>
                  <FaFacebook className='text-2xl' />
                  <FaInstagram className='text-2xl' />
                  <FaLinkedin className='text-2xl' />
                  <FaTwitter className='text-2xl' />
    
                </div>
              </div>
    
            </div>
            <div className=' h-full p-10 w-1/2 bg-blue-50 rounded-r-2xl'>
             <form onSubmit={handleSubmit}>
               <h1 className='font-bold text-3xl pb-4'>
                Send us a message
              </h1 >
              <div className='flex gap-15'>
                <div>
                  <label className="block text-black text-sm mb-2" htmlFor="username">
                    Name
                  </label>
                  <input
                  required
                    id="username"
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                  />
    
                  <label className="block text-black text-sm mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                  required
                    id="phone"
                    type="tel"
                    maxLength={10}
                    minLength={10}
                    placeholder="Enter your Phone no."
                    className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                  />
    
                </div>
                <div>
                  <label className="block text-black text-sm mb-2" htmlFor="company">
                  Company
                </label>
                    <input
                  id="company"
                  type="text"
                  placeholder="Enter your Company name"
                  className="w-full bg-gray-200 text-gray-800  px-2 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                />
    
                <label className="block text-black text-sm mb-2" htmlFor="email">
                  Email
                </label>
                    <input
                    required
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                />
                </div>
    
              </div>
              <div>
                <label className="block text-black text-sm mb-2" htmlFor="subject">
                  Subject
                </label>
                    <input
                    required
                  id="Subject"
                  type="text"
                  placeholder="Enter your Subject"
                  className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                />
    
                <label className="block text-black text-sm mb-2" htmlFor="message">
                  Message
                </label>
                    <textarea
                    cols={30}
                    rows={5}
                  id="message"
                  type="text"
                  placeholder="Enter your Message"
                
                  className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2  focus:ring-blue-300 placeholder-gray-500 text-sm"
                />
               <div className='text-center pt-4'>
                 <button className='bg-blue-800 text-white w-140 h-10 rounded-3xl'>Send</button>
               </div>
              </div>
             </form>
            </div>
    
          </div>
    
    
          <div className='flex justify-center  '>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.7435917874463!2d80.92025477529822!3d27.00665967659125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999511362f9e749%3A0x73357392bf18c880!2sSR%20Group%20Of%20Institutions!5e0!3m2!1sen!2sin!4v1772194583705!5m2!1sen!2sin" className='w-full h-100 rounded-2xl  '></iframe>
    
    
    
          </div>
    
        </div>
  )
}

export default About