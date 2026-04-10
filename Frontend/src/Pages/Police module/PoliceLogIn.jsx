import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

const PoliceLogIn = () => {
  const handleSubmit = (e) => {
    navigate("/Home");
  }

  return (
    // Main background taking up the full screen
    <div className=" pt-15 flex items-center justify-center p-4 font-sans ">
      
     
      <div className='bg-[url("https://i.pinimg.com/736x/45/7a/b2/457ab2ad5e493f9f1bd92dc4d722ee3e.jpg")] bg-cover bg-no-repeat bg-center rounded-xl p-8 w-full max-w-md shadow-2xl border-2 h-130'>
        
        {/* Title */}
        <h2 className="text-black text-2xl font-semibold text-center mb-8 tracking-wide">
          eCrimePortal Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username/Mobile Input */}
          <div className="mb-5">
            <label className="block text-black text-sm mb-2" htmlFor="username">
              UserName/Mobile
            </label>
            <input
            required
              id="username"
              type="text"
              placeholder="Enter your Username/Mobile"
              className="w-full bg-[#f0f2f5] text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Password Input */}
          <div className="mb-20">
            <label className="block text-black text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
            required
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
           <Link to={'/police'}> Login</Link>
          </button>
        </form>



       
        

      
        
      </div>
    </div>

  )
}

export default PoliceLogIn