import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='p-10 flex gap-10'>
        
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/Login'}>login</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/Register'}>Register</Link></button>
        <button className='px-6 py-3 bg-blue-300 rounded-2xl'><Link to={'/ComplaintRegister'}>Complaint Register Page</Link></button>
    </div>
  )
}

export default Services