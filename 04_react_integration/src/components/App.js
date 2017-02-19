import React from 'react'

import ProgressBar from './ProgressBar'

const BODY_STYLE = {
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
}

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      progressValue: 0
    }
  }

  onChangeProgressValue (event) {
    this.setState({
      progressValue: event.target.value
    })
  }

  render () {
    return (
      <div style={BODY_STYLE}>
        <h1>Progress Bar</h1>
        <input type='number' min='0' max='100' placeholder='Insert Progress value...' value={this.state.progressValue} onChange={event => this.onChangeProgressValue(event)} />
        <ProgressBar value={parseInt(this.state.progressValue)} animationDuration={100} />
      </div>
    )
  }
}
