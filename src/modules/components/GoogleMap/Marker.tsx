import React from "react";
import marker from "./location.svg";

interface MarkerProps {
  name: string;
}

const Marker: React.FC<MarkerProps> = ({ name }) => {
  return (
    <div>
      <img src={marker} alt="marker" />
    </div>
  );
};

export default Marker;
