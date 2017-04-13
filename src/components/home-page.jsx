import React from 'react';
import ReactDOM from 'react-dom';

import {hashHistory} from 'react-router';


export default class HomePage extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    ReactDOM.findDOMNode(this).scrollIntoView();
    var target = $('.home1-2');
    var targetHeight = target.outerHeight();
    $(window).scroll(function(e){
      var scrollPercent = (230 - window.scrollY) / 230;
      target.css('opacity', scrollPercent);
    });
  }

  goToProducts = () => {
    hashHistory.push('/products');
  }



  render = () => {
    return (
      <div className="main">
        <div className="bufferTop"></div>
        <div className="home1">
          <div className="home1-2">
            <div className="innerHD1">
              <div className="bigTopText padd-left">
                Powerful, Intuitive, Integrated
              </div>
              <div className="topText">
                <p className="boldText1">Piper's Point-of-Sale</p>
                <p className="nonBoldText1">solution has been specifically designed for
                </p>
              </div>
              <div className="topText">
                <p className="nonBoldText2">the cannabis industry and</p>
                <p className="boldText2">reports to METRC automatically.
                </p>
              </div>
            </div>
          </div>
          <div className="homePic1">
          </div>
          <div className="homePic2">
          </div>
        </div>
        <div className="home2">
          <div className="innerHD2"><p className="hD2Text" id="connectButton" >Connect</p></div>
          <div className="innerHD2"><p className="hD2Text" id="qualityButton" >Quality</p></div>
          <div className="innerHD2"><p className="hD2Text"  id="easeButton" >Ease</p></div>
          <div className="innerHD2"><p className="hD2Text" id="valueButton" >Value</p></div>
        </div>
        <div className="home3" id="connect">
          <div className="innerHD3">
            <div className="innerHD3Box">
              <i className="fa fa-cloud-upload fa-4x hvr-grow" aria-hidden="true"></i>
              <h3 className="homeHeader3">Compliance Integration</h3>
              <p className="bulletText">
                Piper was founded to service the cannabis industry with state compliance and integration in mind. We are METRC certified and provide seemless behind-the-scenes integration into the METRC API. With Piper, you’ll never have to deal with the time, cost, and headache of sending your data to the state again.
              </p>
            </div>
            <div className="innerHD3Box">
              <i className="fa fa-star fa-4x hvr-grow" aria-hidden="true"></i>
              <h3 className="homeHeader3">Globally Proven Software</h3>
              <p className="bulletText">
                We know point of sales systems can be problematic. That’s why we’ve formed a partnership with uniCenta, an international leader in POS technology. You can now focus your energy and effort on other aspects of your business knowing that your point of sales and inventory management software has the security and support of an enterprise provider.
              </p>
            </div>
            <div className="innerHD3Box">
              <i className="fa fa-universal-access fa-4x hvr-grow" aria-hidden="true"></i>
              <h3 className="homeHeader3">Unparalled Customer Service</h3>
                <p className="bulletText">
                  At PiperPOS, we believe that nothing compliments a great product better than a great customer service team. Our staff has years
                  of experience in software services and customer facing industries, so we know what it takes to provide unrivaled support to customers.
                  We take a lot of pride in our product, so ensuring a smooth experience for our users is the top priority.
                </p>
            </div>
          </div>
        </div>
        <div className="buffer"></div>
        <div className="home3">
          <h3 className="bigText">Instantaneous, Compliant Transactions</h3>
          <p className="smallText">The ultimate METRC certified POS solution is here.</p>
          <img className="bigImage" src="../assets/images/pos9.png"/>
        </div>
        <div className="home4">
          <div className="midHead">
            <h3 className="bigText3">Cutting-Edge Features</h3>
          </div>
          <div className="innerHome4">
            <div className="innerHome4-1">
              <div className="innerH4Content">
                <div className="faContainer">
                  <i className="fa fa-line-chart faCol fa-4x hvr-grow" aria-hidden="true"></i>
                </div>
                <div className="innerH4Text">
                  <h3 className="bigText2">Stunning, Informative Reports</h3>
                  <p className="smallText2">Inventory, sales, supplier, financial, employee, and customer reports all at your fingertips!</p>
                </div>
              </div>
              <div className="innerH4Content">
                <div className="faContainer">
                  <i className="fa fa-database faCol fa-4x hvr-grow" aria-hidden="true"></i>
                </div>
                <div className="innerH4Text">
                  <h3 className="bigText2">Inventory Management</h3>
                  <p className="smallText2">The ultimate METRC certified POS solution is here.</p>
                </div>
              </div>
              <div className="innerH4Content">
                <div className="faContainer">
                  <i className="fa fa-sitemap faCol fa-4x hvr-grow" aria-hidden="true"></i>
                </div>
                <div className="innerH4Text">
                  <h3 className="bigText2">Employee Access Heirarchy</h3>
                  <p className="smallText2">The ultimate METRC certified POS solution is here.</p>
                </div>
              </div>
              <div className="innerH4Content">
                <div className="faContainer">
                  <i className="fa fa-calculator faCol fa-4x hvr-grow" aria-hidden="true"></i>
                </div>
                <div className="innerH4Text">
                  <h3 className="bigText2">Discount Engine</h3>
                  <p className="smallText2">The ultimate METRC certified POS solution is here.
                  </p>
                </div>
              </div>
            </div>
            <div className="innerHome4-2">
              <img className="smallImage" src="../assets/images/pos6.png"/>
            </div>
          </div>
        </div>
        <div className="home9">
          <img className="bigImage2" src="../assets/images/storeCounter.jpg"/>
        </div>
        <div className="home7">
          <h2 className="callHeader">Want to Learn More?</h2>
          <p className="smallText3">Click below to read more about our product features and offerings.</p>
          <button type="button" className="btn btn-default callButton" onClick={this.goToProducts} >Explore</button>
        </div>
      </div>
    );
  }
}
