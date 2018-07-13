import React, { Component } from 'react'
import '../css/figure.css'

class Figure extends Component {
  constructor(props){
    super(props)
    this.state = {
      ready: 0,
      error: 0
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
        <div className='figure-container' style={{minHeight:120}}>
          <img src={this.props.source} className='figure' alt={this.props.alt||this.props.caption.props.children}
            style={{visibility: this.state.ready&&!this.state.error?'visible':'hidden'}}
            onLoad={()=>this.setState({ready:1})} onError={()=>this.setState({error:1})}/>
          {
            this.state.ready&&!this.state.error?
            ''
            :
            <img src='img/loading.gif' className="figure-loading" alt="loading" />
          }
        </div>
        <div className='figure-caption'>
          <span className='figure-n'>Figure {this.number}: </span>
          {this.props.caption}
        </div>
        <a className='figure-open' title='open' target='_blank' href={this.props.source}><img className='figure-open-clip' src='img/clip.png' alt=''/></a>
      </div>
    )
  }
}

export default Figure
