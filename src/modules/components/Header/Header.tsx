import React, { Component } from "react";
import mapImage from "modules/Images/icon_map@2x.png";
import arrow from "modules/Images/ic_webBack@2x.png";

interface Props {}
interface State {}

export default class Header extends Component<Props, State> {
  state = {};

  render() {
      
    return (
      <div
        style={{
          height: "70px",
          backgroundColor: "#43e895",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px"
        }}
      >
        <img src={arrow} alt="map" style={{ width: "10px", height: "20px" }} />
        <h2>Lunch Tyme</h2>
        <img src={mapImage} alt="map" style={{ width: "40px", height: "40px" }} />
      </div>
    );
  }
}
