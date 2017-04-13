import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/app';
import HomePage from '../components/home-page';
import ProductsPage from '../components/products';
import FactsPage from '../components/facts';
import AboutPage from '../components/about';
import ContactPage from '../components/contact';








const app = document.getElementById('app');

var RouterComponent = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/" component={HomePage}/>
      <Route path="/products" component={ProductsPage}/>
      <Route path="/facts" component={FactsPage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/contact" component={ContactPage}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(RouterComponent, root);
});
