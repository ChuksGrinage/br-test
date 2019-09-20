import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Card, DetailsView } from "modules/components";

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
        <div className="gridItem">
          {restaurants.map(restaurant => (
            <div key={restaurant.name}>
              <div onClick={() => this.handleCardClick(restaurant.name)}>
                <Card
                  title={restaurant.name}
                  subText={restaurant.category}
                  image={restaurant.backgroundImageURL}
                />
              </div>
              <ReactCSSTransitionGroup
                transitionName="display"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                {selectedRestaurant === restaurant.name && (
                  <div className="detailsCtnr">
                    <DetailsView restaurant={restaurant} className="details" />
                  </div>
                )}
              </ReactCSSTransitionGroup>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
