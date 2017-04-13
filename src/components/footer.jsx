import React from 'react';
import {hashHistory} from 'react-router';

export default class Footer extends React.Component {
  render = () => {
    return (
      <div className="mainFooter">
        &copy; 2017 PiperPOS Inc.
      </div>
    );
  }
}
