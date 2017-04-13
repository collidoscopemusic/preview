import React from 'react';
import ReactDOM from 'react-dom';

import {hashHistory} from 'react-router';


export default class FactsPage extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      q1Showing: false,
      q2Showing: false,
      q3Showing: false,
      q4Showing: false,
      q6Showing: false,
      q7Showing: false
    }
  }
  componentDidMount = () => {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  // toggleSideBar = () => {
	// 	if(this.state.historyBarShowing === false) {
	// 		$("#allContent").css({"width": "80%"});
	// 		$("#history").css({"display": "flex"});
	// 		this.setState({historyBarShowing: true});
	// 	}
	// 	if (this.state.historyBarShowing === true) {
	// 		$("#history").css({"display": "none"});
	// 		$("#allContent").css({"width": "100%"});
	// 		this.setState({historyBarShowing: false});
	// 	}
	// }
  toggleQ1 = () => {
    if(this.state.q1Showing === false) {
      console.log("inside fadeIn");
      $('#answer1').css(
        {'display': 'flex',
          'animation': 'fadein 2s'
        }
      );

      $('#FAQIcon1-1').css({'display': 'none'}
      )
      $('#FAQIcon1-2').css({'display': 'flex'}
      )
      this.setState({q1Showing: true});
    }

    if(this.state.q1Showing === true) {
      $('#answer1').click(function() {
        console.log("inside fadeOut");

        $( "#answer1" ).fadeOut( "fast", function() {
          // Animation complete.
        });
      });
      $('#answer1').css({'display': 'none'});

      $('#FAQIcon1-1').css({'display': 'flex'}
      )
      $('#FAQIcon1-2').css({'display': 'none'}
      )
      this.setState({q1Showing: false});
    }
  }
  toggleQ2 = () => {
    if(this.state.q2Showing === false) {
      $('#answer2').css(
        {'display': 'flex',
          'animation': 'fadein 2s',
        });
        $('#FAQIcon2-1').css({'display': 'none'}
        )
        $('#FAQIcon2-2').css({'display': 'flex'}
        )
      this.setState({q2Showing: true});
    }
    if(this.state.q2Showing === true) {
      $('#answer2').css({'display': 'none'});
      $('#FAQIcon2-1').css({'display': 'flex'}
      )
      $('#FAQIcon2-2').css({'display': 'none'}
      )
      this.setState({q2Showing: false});
    }
  }
  toggleQ3 = () => {
    if(this.state.q3Showing === false) {
      $('#answer3').css(
        {'display': 'flex',
          'animation': 'fadein 2s',
        });
        $('#FAQIcon3-1').css({'display': 'none'}
        )
        $('#FAQIcon3-2').css({'display': 'flex'}
        )
      this.setState({q3Showing: true});
    }
    if(this.state.q3Showing === true) {
      $('#answer3').css({'display': 'none'});
      $('#FAQIcon3-1').css({'display': 'flex'}
      )
      $('#FAQIcon3-2').css({'display': 'none'}
      )
      this.setState({q3Showing: false});
    }
  }
  toggleQ4 = () => {
    if(this.state.q4Showing === false) {
      $('#answer4').css(
        {'display': 'flex',
          'animation': 'fadein 2s',
        });
        $('#FAQIcon4-1').css({'display': 'none'}
        )
        $('#FAQIcon4-2').css({'display': 'flex'}
        )
      this.setState({q4Showing: true});
    }
    if(this.state.q4Showing === true) {
      $('#answer4').css({'display': 'none'});
      $('#FAQIcon4-1').css({'display': 'flex'}
      )
      $('#FAQIcon4-2').css({'display': 'none'}
      )
      this.setState({q4Showing: false});
    }
  }
  toggleQ6 = () => {
    if(this.state.q6Showing === false) {
      $('#answer6').css(
        {'display': 'flex',
          'animation': 'fadein 2s',
        });
        $('#FAQIcon6-1').css({'display': 'none'}
        )
        $('#FAQIcon6-2').css({'display': 'flex'}
        )
      this.setState({q6Showing: true});
    }
    if(this.state.q6Showing === true) {
      $('#answer6').css({'display': 'none'});
      $('#FAQIcon6-1').css({'display': 'flex'}
      )
      $('#FAQIcon6-2').css({'display': 'none'}
      )
      this.setState({q6Showing: false});
    }
  }
  toggleQ7 = () => {
    if(this.state.q7Showing === false) {
      $('#answer7').css(
        {'display': 'flex',
          'animation': 'fadein 2s',
        });
        $('#FAQIcon7-1').css({'display': 'none'}
        )
        $('#FAQIcon7-2').css({'display': 'flex'}
        )
      this.setState({q7Showing: true});
    }
    if(this.state.q7Showing === true) {
      $('#answer7').css({'display': 'none'});
      $('#FAQIcon7-1').css({'display': 'flex'}
      )
      $('#FAQIcon7-2').css({'display': 'none'}
      )
      this.setState({q7Showing: false});
    }
  }

  render = () => {
    return (
      <div className="main">
        <h1 className="topHead">Frequently Asked Questions</h1>
        <div className="FAQs">
          <div className="FAQ">
            <div className="FAQ1" onClick={this.toggleQ1}>
              <div className="FAQIcon" id="FAQIcon1-1">
                <i className="fa fa-2x fa-chevron-circle-right" aria-hidden="true"></i>
              </div>
              <div className="FAQIcon2" id="FAQIcon1-2">
                <i className="fa fa-2x fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              <div className="question">
                Does PiperPOS really report directly to METRC?
              </div>
            </div>
            <div className="answer" id="answer1">
              <p className="answerText">
                Yes, PiperPOS is METRC certified and sends transaction and compliance data via an API.
              </p>
            </div>
          </div>
          <div className="FAQ">
            <div className="FAQ1" onClick={this.toggleQ2}>
              <div className="FAQIcon" id="FAQIcon2-1">
                <i className=" fa fa-2x fa-chevron-circle-right" aria-hidden="true"></i>
              </div>
              <div className="FAQIcon2" id="FAQIcon2-2">
                <i className=" fa fa-2x fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              <div className="question">
                Does PiperPOS provide equipment?
              </div>
            </div>
            <div className="answer" id="answer2">
              <p className="answerText">
                Yes, we provide our customers with fully-functional POS terminals that are tailored for our software.
              </p>
            </div>
          </div>
          <div className="FAQ">
            <div className="FAQ1" onClick={this.toggleQ3}>
              <div className="FAQIcon" id="FAQIcon3-1">
                <i className=" fa fa-2x fa-chevron-circle-right" aria-hidden="true"></i>
              </div>
              <div className="FAQIcon2" id="FAQIcon3-2">
                <i className=" fa fa-2x fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              <div className="question">
                What if I lose internet access in my store?
              </div>
            </div>
            <div className="answer" id="answer3">
              <p className="answerText">
                If internet is unavailable our software will save your data and send it to METRC when you're back online!
              </p>
            </div>
          </div>
          <div className="FAQ">
            <div className="FAQ1" onClick={this.toggleQ4}>
              <div className="FAQIcon" id="FAQIcon4-1">
                <i className=" fa fa-2x fa-chevron-circle-right" aria-hidden="true"></i>
              </div>
              <div className="FAQIcon2" id="FAQIcon4-2">
                <i className=" fa fa-2x fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              <div className="question">
                What if I don’t have time to learn new software?
              </div>
            </div>
            <div className="answer" id="answer4">
              <p className="answerText">
                Don't fret. Our platform is extremely easy to learn and is used by over 600,000 users worldwide!
              </p>
            </div>
          </div>
          <div className="FAQ">
            <div className="FAQ1" onClick={this.toggleQ6}>
              <div className="FAQIcon" id="FAQIcon6-1">
                <i className=" fa fa-2x fa-chevron-circle-right" aria-hidden="true"></i>
              </div>
              <div className="FAQIcon2" id="FAQIcon6-2">
                <i className=" fa fa-2x fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              <div className="question">
                Where is my data stored?
              </div>
            </div>
            <div className="answer" id="answer6">
              <p className="answerText">
                Your data is stored on your POS hard drive for convenient, anytime access.
              </p>
            </div>
          </div>
          <div className="FAQ">
            <div className="FAQ1" onClick={this.toggleQ7}>
              <div className="FAQIcon" id="FAQIcon7-1">
                <i className=" fa fa-2x fa-chevron-circle-right" aria-hidden="true"></i>
              </div>
              <div className="FAQIcon2" id="FAQIcon7-2">
                <i className=" fa fa-2x fa-chevron-circle-down" aria-hidden="true"></i>
              </div>
              <div className="question">
                Does PiperPOS support member levels?
              </div>
            </div>
            <div className="answer" id="answer7">
              <p className="answerText">
                Yes, PiperPOS supports differing member levels,
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
