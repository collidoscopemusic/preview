import React from 'react';
import ReactDOM from 'react-dom';

import {hashHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; import AlertContainer from 'react-alert';
import {validator, isEmail, isEmpty} from 'validator';



export default class ContactPage extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }

    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }
  componentDidMount = () => {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }
  showAlertSubmit = () => {
    msg.show('Success!', {
      time: 2000,
      type: 'success',
      icon: <img src="../../assets/images/info.png" />
    });
  }
  showAlertName = () => {
    msg.show('Please include your name.', {
      time: 2000,
      type: 'error',
      icon: <img src="../../assets/images/info.png" />
    });
  }
  showAlertEmail = () => {
    msg.show('Please include a valid email.', {
      time: 2000,
      type: 'error',
      icon: <img src="../../assets/images/info.png" />
    });
  }
  goToHome = () => {
    hashHistory.push('/');
  }

  handleSubmit = () => {
    if (isEmpty(this.state.name.toString())) {
      this.showAlertName();
      // alert("Please include your name.");
      return;
    };
    if (!isEmail(this.state.email.toString())) {
      this.showAlertEmail();
      return;
    };
    $.ajax({
      url: 'https://formspree.io/henry@first-payment-int.com',
      method: 'POST',
      data: this.state,
      dataType: "json",
      success: function(data) {
        // console.log("Successfully Created Blog Post >:P");
      },
      error: function(error) {
        // console.log("I award you no points, and may god have mercy on your soul");
      }
    });
    this.showAlertSubmit();
    setTimeout(this.goToHome, 3000);
  }
  updateName = (evt) => {
    this.setState({name: evt.target.value})
    // console.log("update name", this.state);
  }
  updateEmail = (evt) => {
    this.setState({email: evt.target.value});
    // console.log("update email", this.state);
  }
  updateSubject = (evt) => {
    this.setState({subject: evt.target.value});
    // console.log("update subject", this.state);
  }
  updateMessage = (evt) => {
    this.setState({message: evt.target.value});
    // console.log("update message", this.state);
  }

  render = () => {
    return (
      <div className="main">
        <h1 className="topHead">Contact Us!</h1>
        <form className="form">
          <input type="text" className="form-control input-field" placeholder="Your Name" onChange={this.updateName}/>
          <input type="text" className="form-control input-field" placeholder="Your Email" onChange={this.updateEmail}/>
          <input type="text" className="form-control input-field" placeholder="Subject" onChange={this.updateSubject}/>
          <textarea className="input-field textarea" placeholder="Your Message" onChange={this.updateMessage}/>
          <button onClick={this.handleSubmit} type="button" value="Submit" className="btn btn-contact">Submit</button>
        </form>
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}
