import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


const mapStyle={
  margin:'70px',
width:'90%',
height:'500px'

}
const locations = [  
  { lat: 29.6139, lng: 79.2090 }, 
  { lat: 27.0066, lng: 80.9202 },
  { lat: 28.7041, lng: 77.1025 }, 
  { lat: 26.4499, lng: 80.3319 }, 
];



const UserMap = () => {
  return (
    <div>
        <div className='static'>
                <LoadScript  googleMapsApiKey='AIzaSyDxE14a8ZbgJ8y7X1xNHn9qba0bVdeODVg'>
              <GoogleMap zoom={6} center={locations[0]} mapContainerStyle={mapStyle}>
                
                  <Marker position={locations[0]}/>
                
              </GoogleMap>
              </LoadScript>
              </div>

    </div>
  )
}

export default UserMap