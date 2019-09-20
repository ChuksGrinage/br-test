import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

interface Props {
  lat: number,
  lng: number,
  name: string
}

const KEY = "AIzaSyBP_lLb-Z5_i4Q0TfhhFvljNMi8ewdwLpU";
console.log(KEY)

const GoogleMap: React.FC<Props> = ({ lat, lng, name }) => {

  const center = {
    lat: lat,
    lng: lng
  }

  return (
    <div style={{height: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={center}
        defaultZoom={11}
      >
        <Marker name={name} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

