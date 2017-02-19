import React from 'react'

import ProgressBar from './ProgressBar'
import Snackbar from './Snackbar'
import Tabs from './Tabs'
import Tab from './Tab'

const BODY_STYLE = {
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
}

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      animationDuration: 250,
      progressValue: 0
    }
  }

  onChangeAnimationDuration (event) {
    this.setState({
      animationDuration: parseInt(event.target.value)
    })
  }

  onChangeProgressValue (event) {
    this.setState({
      progressValue: event.target.value
    })
  }

  render () {
    return (
      <div style={BODY_STYLE}>
        <h1>Animations Speed</h1>
        <input type='range' min='250' max='2000' value={this.state.animationDuration} onChange={event => this.onChangeAnimationDuration(event)} /> {this.state.animationDuration} ms
        <h1>Progress Bar</h1>
        <input type='number' min='0' max='100' placeholder='Insert Progress value...' value={this.state.progressValue} onChange={event => this.onChangeProgressValue(event)} />
        <ProgressBar value={parseInt(this.state.progressValue)} animationDuration={this.state.animationDuration} />
      </div>
    )
  }
}
