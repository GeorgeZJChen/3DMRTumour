import React, { Component } from 'react';
import './App.css';
import Header from './js/header.js'
import Title from './js/title.js'
import Content from './js/content.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='container'>
          <Title ref='title'/>
          <Content parent={this}/>
        </div>
      </div>
    )
  }
}

export default App;
