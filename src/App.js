import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './pages/Home'
import JsonPlaceHolder from './pages/JsonPlaceHolder'

const App = () => {
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jsonPlaceHolder" component={JsonPlaceHolder} />
      </Switch>
    </div>
  );
}

export default App;

