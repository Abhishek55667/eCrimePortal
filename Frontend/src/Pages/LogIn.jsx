import React from 'react'
import { Link } from 'react-router-dom'

const link='http://192.168.1.41:8080/'
var token=''

let getUser =async()=>{
let username=document.getElementById('username').value;
let password=document.getElementById('password').value;
let response=await fetch(link+'public/login',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    username:username, 
  password:password
  })
});
let result=await response.text();
token=result
console.log(token);
return token;

}

const LogIn = () => {


  return (
    // Main background taking up the full screen
    <div className=" pt-15 flex items-center justify-center p-4 font-sans">
      
     
      <div className='bg-[url("https://i.pinimg.com/736x/52/af/96/52af968e07c64ba7d4d33335399126bb.jpg")] bg-cover bg-no-repeat bg-center rounded-xl p-8 w-full max-w-md shadow-2xl border-2 border-blue-'>
        
        {/* Title */}
        <h2 className="text-white text-2xl font-semibold text-center mb-8 tracking-wide">
          eCrimePortal Login
        </h2>

        <form>
          {/* Username/Mobile Input */}
          <div className="mb-5">
            <label className="block text-white text-sm mb-2" htmlFor="username">
              UserName/Mobile
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your Username/Mobile"
              className="w-full bg-[#f0f2f5] text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#f0f2f5] text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Login Button */}
          <button onClick={getUser}
            type="submit"
            className="w-full bg-[#f0f2f5] text-[#3171c6] font-medium py-3 rounded-md hover:bg-white transition duration-200 text-sm"
          >
            <Link to={'/Home'}>Login</Link>
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex justify-center items-center my-5">
          <span className="bg-[#1c4786] text-white text-xs px-4 py-1.5 rounded-full">
            OR
          </span>
        </div>

        {/* Google Sign In Button */} 
        <button 
          type="button"
          className="w-full bg-[#f0f2f5] text-gray-700 font-medium py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white transition duration-200 text-sm"
        >
          {/* Google SVG Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign in with Google
        </button>

        {/* Footer Text */}
        <p className="text-center text-white text-sm mt-6">
          Don't have an account?{' '}
          <a href='/Register' className="font-semibold underline hover:text-gray-200">
            Register
          </a>
        </p>
        
      </div>
    </div>

  )
}

export default LogIn