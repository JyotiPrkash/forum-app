import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import home from './components/home';
import forum from './components/forum';
import worldnews from './components/worldnews';
import about from './components/about';
import Header from './components/header';




function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/forum" exact component={forum} />
        <Route path="/worldnews" exact component={worldnews} />
        <Route path="/about" exact component={about} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
