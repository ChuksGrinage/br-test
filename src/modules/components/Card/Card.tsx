import React, { Component } from "react";
import gradient from "modules/Images/cellGradientBackground@2x.png";

interface Props {
  title: string;
  subText: string;
  image: string;
}
interface State {}

export default class Card extends Component<Props, State> {
  state = {};

  render() {
    const { title, subText, image } = this.props;
    return (
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          <div style={{ height: "50%", padding: "50% 20px 20px", backgroundImage: `url(${gradient})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <h3 style={{ margin: "0" }}>{title}</h3>
            <h4 style={{ fontWeight: "lighter", margin: "0" }}>{subText}</h4>
          </div>
        </div>
    );
  }
}
