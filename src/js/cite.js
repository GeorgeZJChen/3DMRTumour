import React, { Component } from 'react'
import '../css/cite.css'

class Cite extends Component {
  constructor(props){
    super(props)
    for(let i=0; i<props.references.length ; i++){
      if(props.references[i].name === props.name){
        this.n = i+1
        this.text = props.references[i].text
        break
      }
    }
  }
  goToRefs(){
    const to = this.props.name
    if(window.location.hash.replace(' ','%20') === '#'+to){
      window.location.hash = ''
    }
    window.location.hash = '#'+to
  }
  render() {
    return (
      <span className='cite' title={this.text} onClick={()=>this.goToRefs()}>
        [{this.n}]
      </span>
    )
  }
}
class References extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <table className='references'>
        <tbody>
        {
          this.props.references.map((reference, index)=>{
            return <Reference reference={reference} key={index} index={index}/>
          })
        }
        </tbody>
      </table>
    )
  }
}
class Reference extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <tr className='reference'>
        <td className='ref-n'>
          [{this.props.index+1}]
          <a name={this.props.reference.name} className='anchor'>Reference {this.props.reference.name}</a>
        </td>
        <td className='ref-text'>{this.props.reference.text}</td>
      </tr>
    )
  }
}

export {Cite, References}
