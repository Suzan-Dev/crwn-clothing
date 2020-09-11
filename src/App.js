import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';

function HatsPage(props) {
  // console.log(props);
  return (
    <>
      <h1>Hats Page</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
