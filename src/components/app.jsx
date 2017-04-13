import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import ProductsPage from './products';
import FactsPage from './facts';
import AboutPage from './about';
import ContactPage from './contact';



export default class App extends React.Component {

  render = () => {
    return (
      <div className="app">
        <NavBar/>
        <div className="navBuff"></div>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
