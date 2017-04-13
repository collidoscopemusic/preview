import React from 'react';
import ReactDOM from 'react-dom';

import {hashHistory} from 'react-router';


export default class ProductsPage extends React.Component {
  componentDidMount = () => {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }
//   $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
//
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//
//                 $(this).animate({'opacity':'1'},500);
//
//             }
//
//         });
//
//     });
//
// });

  render = () => {
    return (
      <div className="main">
        <div className="outerP1">
          <div className="splash-overlay">
            <div className="overlay-text-container">
              <div id="product-text">
                The most powerful Point-of-Sale system ever created, now tailored for the cannabis industry.
              </div>
            </div>
          </div>
          <div className="splash-img-container">
            <img className="product-splash-img" src="../assets/images/storeCounter.jpg"/>
          </div>
        </div>
        <div className="product-header-container">
          <div className="product-headers"><a className="p-header-text" id="connectButton" url="#connect">Connect</a></div>
          <div className="product-headers"><a className="p-header-text" id="qualityButton" url="#quality">Quality</a></div>
          <div className="product-headers"><a className="p-header-text"  id="easeButton" url="#ease">Ease</a></div>
          <div className="product-headers"><a className="p-header-text" id="valueButton">Value</a></div>
          <div className="product-headers"><a className="p-header-text" id="valueButton">Value</a></div>
          <div className="product-headers"><a className="p-header-text" id="valueButton">Value</a></div>
        </div>
        <div className="outerP2">
          <div className="p2ImageHidden">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
          <div className="p2Content">
            <div className="innerP2Content">
              <h3>Header</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="p2Image">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
        </div>
        <div className="outerP3" id="quality">
          <div className="p2ImageHidden">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
          <div className="p2Image">
            <img src="../assets/images/pos5.png" className="productImage"/>
          </div>
          <div className="p2Content">
            <div className="innerP2Content">
              <h3>Header</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
        <div className="outerP2">
          <div className="p2ImageHidden">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
          <div className="p2Content">
            <div className="innerP2Content">
              <h3>Header</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="p2Image">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
        </div>
        <div className="outerP3">
          <div className="p2ImageHidden">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
          <div className="p2Image">
            <img src="../assets/images/pos5.png" className="productImage"/>
          </div>
          <div className="p2Content">
            <div className="innerP2Content">
              <h3>Header</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
        <div className="outerP2">
          <div className="p2ImageHidden">
            <img src="../assets/images/pos5.png" className="productImage2"/>
          </div>
          <div className="p2Content">
            <div className="innerP2Content">
              <h3>Header</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="p2Image">
            <img src="../assets/images/pos5.png" className="productImage"/>
          </div>
        </div>
      </div>
    );
  }
}
