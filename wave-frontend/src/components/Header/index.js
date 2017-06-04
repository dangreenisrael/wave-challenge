import React, {Component} from 'react';
import {mainStyle, titleStyle, h1Style} from './style';

export default class extends Component {
  render() {
    return (
      <header style={mainStyle}>
        <h1 style={h1Style}>
          <span style={titleStyle}>
            Payroll Reporter
          </span>
        </h1>
      </header>
    );
  }
}
