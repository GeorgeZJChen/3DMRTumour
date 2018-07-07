import React, { Component } from 'react'
import loading from '../img/loading.gif'
import '../css/figure.css'

class Figure extends Component {
  constructor(props){
    super(props)
    this.state = {
      ready: 0
    }
    if(!window.__count_figures__){
      window.__count_figures__ = 1
    }else {
      window.__count_figures__ ++
    }
    this.number = window.__count_figures__

  }
  render() {
    return (
      <div className='figure-frame'
         style={{width:this.props.width}}>
        <div className='figure-container' style={{minHeight:150}}>
          <img src={this.props.source} className='figure' alt={this.props.alt||this.props.caption}
            onLoad={()=>this.setState({ready:1})}/>
          {
            this.state.ready?
            ''
            :
            <img src={loading} className="figure-loading" alt="loading" />
          }
        </div>
        <div className='figure-caption'>
          <span className='figure-n'>Figure {this.number}: </span>
          {this.props.caption}
        </div>
      </div>
    )
  }
}

export default Figure
