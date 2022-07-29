import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const GoggleMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>LOADING...</div>;

  return <Map />;
};

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 39.72781, lng: -105.00324 }}
      mapContainerClassName='map-container'
    >
      <Marker position={{ lat: 39.72781, lng: -105.00324 }} />
    </GoogleMap>
  );
}

export default GoggleMap;
