import React, { Component } from 'react';
import './App.css';
import Header from './js/header.js'
import Footer from './js/footer.js'
import Title from './js/title.js'
import Content from './js/content.js'

class App extends Component {
  render() {
    const title='Deep Learning for Brain Tumour Detection with Experimental Segmentation'
    return (
      <div className="App">
        <Header title={title} ref='header'/>
        <div className='container'>
          <Title ref='title' title={title}/>
          <Content parent={this}/>
        </div>
        <Footer parent={this}/>
      </div>
    )
  }
}

export default App;
