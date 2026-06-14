// PoliceMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api'

const PoliceMap = () => {
  const [location, setlocation] = useState({ lat: 0, lng: 0 })
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition((position) => {
        setlocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
        (err) => {
          setError(err.message)
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
    else {
      setError("Geolocation not supported by this browser.");
    }
  }, []);

  const mapStyle = {
    width: '95%',
    height: '70vh'
  }

   const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDxE14a8ZbgJ8y7X1xNHn9qba0bVdeODVg",
  });

  const center = { lat: 26.8467, lng: 80.9462 };

  if (!isLoaded) return <div>Loading...</div>;




  return (
    <div style={{ height: "100vh", width: "100%" }}>

      <div className="p-7 pl-20 text-xl font-bold text-center">
        <h1 className="bg-amber-400 p-3 w-1/5 text-white">Track User's Location</h1>
      </div>

      <div className="ml-20">
        
          <GoogleMap zoom={13} center={location} mapContainerStyle={mapStyle}>

            <Marker
              position={location}
              />
          </GoogleMap>
        
      </div>
    </div>
  );
};

export default PoliceMap;
