import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { RestaurantPage } from './modules/pages';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path='/' exact component={RestaurantPage}/>
      </BrowserRouter>
  );
}

export default App;
