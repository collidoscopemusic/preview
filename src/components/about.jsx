import React from 'react';
import ReactDOM from 'react-dom';

import {hashHistory} from 'react-router';


export default class AboutPage extends React.Component {

  render = () => {
    return (
      <div className="mainAbout">
        <div className="about1">
          <img className="aboutPic" src="../assets/images/denver1.jpg" />
        </div>
        <div className="overHead">
          <h3 className="aboutHead">About Us</h3>
        </div>
        <div className="about2Container">
          <div className="about2">
            <div className="mission">
              <h3 className="aboutH3">Our Mission</h3>
              <p className="aboutP1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <h3 className="aboutH3">Our Story</h3>
              <p className="aboutP1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="about3Container">
          <div className="about3">
            <h3 className="bigText4">Executive Team</h3>
            <div className="exec">
              <div className="execImage">
                <img src="../assets/images/carlos1.jpg" className="execImage2"/>
              </div>
              <div className="execInfo">
                <h3 className="execName">Carlos Ruiz</h3>
                <h4 className="execTitle">CEO</h4>
                <p className="aboutP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
            <div className="exec">
              <div className="execImage">
                <img src="../assets/images/carlos1.jpg" className="execImage2"/>
              </div>
              <div className="execInfo">
                <h3 className="execName">Jack Gerrard</h3>
                <h4 className="execTitle">CEO</h4>
                <p className="execBio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
            <div className="exec">
              <div className="execImage">
                <img src="../assets/images/carlos1.jpg" className="execImage2"/>
              </div>
              <div className="execInfo">
                <h3 className="execName">Rob</h3>
                <h4 className="execTitle">CEO</h4>
                <p className="execBio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
