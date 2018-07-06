import React, { Component } from 'react'
import '../css/title.css'

class Title extends Component {
  nameOnClick(){
    // TODO:
  }
  toggleTableOfContent(){
    if(this.refs.tocToggle.className.indexOf('show')==-1){
      this.refs.tocToggle.className += ' show'
    }else{
      this.refs.tocToggle.className = this.refs.tocToggle.className.replace(' show','')
    }
  }
  render() {
    return (
      <div>
        <div className='title'>
          <h1 className='title-text'>Brain Tumour Detection and Experimental Segmentation</h1>
          <div className='author'>
            <span className='link author-name' title="See more about the author" onClick={()=>this.nameOnClick}>Zhuojun Chen</span>,&nbsp;
            <span className='link author-org' title="Visit official site of University of Dundee" onClick={()=>window.open("http://dundee.ac.uk/")}>University of Dundee</span>
          </div>
        </div>
        <div className='panel'>
          <div className='panel-content'>
            <hr color='#dadada'/>
            <div className='views' style={{width:'2.8rem'}}><div>387</div><div style={{color:'#666',fontSize:'0.8rem'}}>Views</div></div>
            <div className='views' style={{width:'3.5rem'}}><div>6</div><div style={{color:'#666',fontSize:'0.8rem'}}>Updates</div></div>
            <div className='table-of-content'>
              <div className='toc-toggle' onClick={()=>this.toggleTableOfContent()} ref='tocToggle'>
                <span>Sections</span>
                <div className='angle'></div>
              </div>
              <div className='toc-ul-container'>
                <ul className='toc-ul' style={{maxHeight: document.body.clientHeight-100}}>
                  <li>Summary</li>
                  <li>title 2</li>
                  <li>title 3</li>
                  <li>title 4</li>
                  <li>title 5</li>
                  <li>title 6</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
