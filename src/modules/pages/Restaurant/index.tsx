import React, { Component } from 'react';
import axios from "axios";
import { MainLayout } from '../../layouts';
import RestaurantPageLayout from './Layout';
import { Restaurant } from '../../types';

interface RestaurantPageProps {}

interface RestaurantPageState {
  restaurants: Restaurant[];
}

const API = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

class RestaurantPage extends Component<RestaurantPageProps, RestaurantPageState> {

  state = {
    restaurants: []
  }

  componentDidMount() {
    this.getRestaurants();
  }

  async getRestaurants () {
    const res = await axios.get(API);
    const restaurants = res.data.restaurants;
    this.setState({ restaurants });
  }

  render() {
    return (
      <MainLayout>
        <RestaurantPageLayout restaurants={this.state.restaurants} />
      </MainLayout>
    );
  }
}


export default RestaurantPage;