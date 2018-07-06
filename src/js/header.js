import React, { Component } from 'react'
import logo from '../logo.svg'
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={logo} className="header-logo" alt="logo" />
        <div className='header-title'>Brain Tumour Detection and Experimental Segmentation</div>
        <div className='options'>
          <div className='options-text'>More Projects</div>
          <div className='options-btn'></div>
        </div>
      </div>
    )
  }
}

export default Header;
