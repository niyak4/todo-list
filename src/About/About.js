import React from 'react'
import './About.css'

export default class About extends React.Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <React.Fragment>
        <button className='button-open-about' onClick={() => this.setState({ isOpen: true })}>Open About</button>
        {this.state.isOpen && (<div className='about'>
          <div className='about-body'>
            <h1>About</h1>
            <p>My first todo task using React</p>
            <button onClick={() => this.setState({ isOpen: false })}>Close</button>
          </div>
        </div>)}
      </React.Fragment>
    )
  }
}
