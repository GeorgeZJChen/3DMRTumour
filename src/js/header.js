import React, { Component } from 'react'
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src='img/logo.svg' className="header-logo" alt="logo" />
        <div className='header-title'>{this.props.title}</div>
        <div className='options'>
          <div className='options-text'>More Projects</div>
          <div className='options-btn'></div>
        </div>
      </div>
    )
  }
}

export default Header
