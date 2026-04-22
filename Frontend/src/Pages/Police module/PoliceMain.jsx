import React from 'react'

import PoliceNavBar from './PoliceNavBar'
import { Route, Routes } from 'react-router-dom'

import TrackComplaintFirst from './TrackComplaintFirst'
import UpdateComplaint from './UpdateComplaint'
import ViewComplaint from './ViewComplaint'
import Police from './Police'

const PoliceMain = () => {
  return (
    <div>
     <div className=''>
         <PoliceNavBar/>
         
     </div>
               <div className='pt-21 ' >
        
       
      <Routes>
        
     <Route path='/' element={<Police/>}></Route>
        
        <Route path='/TrackComplaintFirst' element={<TrackComplaintFirst/>}></Route>
        <Route path='/UpdateComplaint' element={<UpdateComplaint/>}></Route>
         
        <Route path='/ViewComplaint' element={<ViewComplaint/>}></Route>

         


      
      </Routes>
     </div>
      
    </div>
    
  )
}

export default PoliceMain