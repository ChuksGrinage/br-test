import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, DetailsView } from "../../components";

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
      <div>
        {restaurants.map(restaurant => (
          <div key={restaurant.name}>
            <div
              className="cardGridContainer"
              onClick={() => this.handleCardClick(restaurant.name)}
            >
              <Card
                title={restaurant.name}
                subText={restaurant.category}
                image={restaurant.backgroundImageURL}
              />
            </div>
            <ReactCSSTransitionGroup transitionName="display">
              {selectedRestaurant === restaurant.name && (
                <div className="details">
                  <DetailsView restaurant={restaurant} />
                </div>
              )}
            </ReactCSSTransitionGroup>
          </div>
        ))}
      </div>
    );
  }
}
