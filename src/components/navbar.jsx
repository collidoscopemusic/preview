import React from 'react';
import {hashHistory} from 'react-router';

export default class NavBar extends React.Component {

  goToHome = () => {
    $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $navbar.collapse('hide');
    }
  });
    hashHistory.push('/');
  }
  goToProducts = () => {
    hashHistory.push('/products');
  }
  goToFacts = () => {
    hashHistory.push('/facts');
  }
  goToAbout = () => {
    hashHistory.push('/about');
  }
  goToContact = () => {
    hashHistory.push('/contact');
  }


  render = () => {
    return (
      <nav className="navbar navbar-default">
        <div className="navHeader2">
          <a className="navbarLogoLeft" onClick={this.goToHome}><img className="navbarLogo" src="./assets/images/piperlogo.png"/></a>
        </div>
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
    				<li className="navLI">
					    <a className="navLink" onClick={this.goToHome}>Home</a>
				    </li>
            <li className="navLI">
	            <a className="navLink" onClick={this.goToProducts}>Products</a>
	          </li>
            <li className="navLI">
              <a className="navLink" onClick={this.goToFacts}>FAQ</a>
            </li>
            <li className="navLI">
              <a className="navLink" onClick={this.goToAbout}>About</a>
            </li>
            <li className="navLI">
              <a className="navLink" onClick={this.goToContact}>Contact</a>
            </li>
	        </ul>
		    </div>
			</nav>
    );
  }
}
