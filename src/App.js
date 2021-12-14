import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PostsList from './components/posts-list';
import CreatePost from './components/create-post';
import Connect from './components/connect';
import NavBar from './components/navbar.components';
import HomePage from './components/intropage'
import CustomerSign from './components/signupcustomer';
import ShopSign from './components/signupshopkeeper';
import Choice from './components/signchoice'
import Login from './components/login';
import Shops from './components/shops';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

function App(){
  return(
      <Router>
      <div className="container">
      <NavBar/>
      <br/>
      <Route path="/" exact component={PostsList}/>
      <Route path="/create" component={CreatePost}/>
      <Route path="/connect/:id" component={Connect}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/choice" component={Choice}/>
      <Route path="/signupcustomer" component={CustomerSign}/>
      <Route path="/signupshop" component={ShopSign}/>
      <Route path="/login" component={Login}/>
      <Route path="/shops" component={Shops}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      </div>
      </Router>
  )
}

export default App;
