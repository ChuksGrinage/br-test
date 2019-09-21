import React, { Component } from "react";
import { Card, DetailsView } from "modules/components";
// import { usSpring, animated } from 'react-spring';

import { Restaurant } from "../../types";

import "./Layout.css";

interface Props {
  restaurants: Restaurant[];
}
interface State {
  selectedRestaurant: string;
}

export default class RestaurantPageLayout extends Component<Props, State> {
  state = {
    selectedRestaurant: ""
  };

  handleCardClick(name: string) {
    const { selectedRestaurant } = this.state;
    let nextRestaurant;

    name === selectedRestaurant
      ? (nextRestaurant = "")
      : (nextRestaurant = name);

    this.setState({
      selectedRestaurant: nextRestaurant
    });
  }

  render() {
    const { restaurants } = this.props;
    const { selectedRestaurant } = this.state;

    return (
      <div className="cardGridContainer">
        {restaurants.map(restaurant => {
          const detailStatus = selectedRestaurant === restaurant.name ? "--active" : "--inactive";
          console.log(detailStatus)
          return (
            <div key={restaurant.name}>
              <div onClick={() => this.handleCardClick(restaurant.name)}>
                <Card
                  title={restaurant.name}
                  subText={restaurant.category}
                  image={restaurant.backgroundImageURL}
                />
              </div>
              {/* {selectedRestaurant === restaurant.name && ( */}
                <div className={`detailsCtnr${detailStatus}`}>
                  { selectedRestaurant === restaurant.name && <DetailsView restaurant={restaurant} className="details" />}
                </div>
              {/* )} */}
            </div>
          );
        })}
      </div>
    );
  }
}
