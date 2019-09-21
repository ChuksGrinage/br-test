import React, { Component } from "react";
import { GoogleMap } from "modules/components";
import { Restaurant } from "modules/types";

interface Props {
  restaurant: Restaurant;
  className?: string;
}
interface State {}

export default class DetailsView extends Component<Props, State> {
  render() {
    const { className, restaurant } = this.props;
    const { name, location, contact, category } = restaurant;
    return (
      <div
        className={className && className}
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "5px 20px",
          overflow: "hidden",
          boxShadow: "inset 0 0 10px #000000"
        }}
      >
        <div style={{ flex: "3" }}>
          <GoogleMap name={name} lat={location.lat} lng={location.lng} />
        </div>
        <div
          style={{ backgroundColor: "#34B379", flex: ".5", padding: "15px" }}
        >
          <h3 style={{ margin: "0" }}>{name}</h3>
          <h5 style={{ margin: "0", fontWeight: "lighter" }}>{category}</h5>
        </div>
        <div style={{ flex: "3", color: "black", padding: "15px" }}>
          <p>
            {location.address} <br />
            {location.city}, {location.state} {location.postalCode}
          </p>
          {contact ? (
            <React.Fragment>
              <p>{contact.formattedPhone}</p>
              <p>@{contact.twitter}</p>
            </React.Fragment>
          ) : (
            <p>No contacts provided</p>
          )}
        </div>
      </div>
    );
  }
}
