import React, { Component } from 'react';
import './App.css';
import Header from './js/header.js'
import Title from './js/title.js'
import Content from './js/content.js'

class App extends Component {
  render() {
    const title='Feature Augmentation with Multi-model Deep Learning for Brain Tumour Detection'
    return (
      <div className="App">
        <Header title={title}/>
        <div className='container'>
          <Title ref='title' title={title}/>
          <Content parent={this}/>
        </div>
      </div>
    )
  }
}

export default App;
