import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './pages/Home'
import JsonPlaceHolder from './pages/JsonPlaceHolder'
import Post from './pages/JsonPlaceHolder/Post'

const App = () => {
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact exact path="/jsonPlaceHolder" component={JsonPlaceHolder} />
        <Route path="/jsonPlaceHolder/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;

