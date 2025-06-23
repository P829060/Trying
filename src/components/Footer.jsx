
import React, { Component } from 'react';

const FooterStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
};

export default class Footer extends Component {
  render() {
    return (
      <div style={FooterStyle}>
        © Copyright 2025 , All Rights Reserved
      </div>
    );
  }
}