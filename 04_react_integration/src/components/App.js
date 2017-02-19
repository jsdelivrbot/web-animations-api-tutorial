import React from 'react'

import ProgressBar from './ProgressBar'
import Snackbar from './Snackbar'

const BODY_STYLE = {
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
}

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      progressValue: 0,
      messageValue: '',
      showSnackbar: false
    }
  }

  onChangeProgressValue (event) {
    this.setState({
      progressValue: event.target.value
    })
  }

  onChangeMessageValue (event) {
    this.setState({
      messageValue: event.target.value
    })
  }

  showSnackbar () {
    this.setState({
      showSnackbar: true
    })
  }

  onSnackbarHide () {
    this.setState({
      showSnackbar: false
    })
    console.log('snackbar closed')
  }

  render () {
    return (
      <div style={BODY_STYLE}>
        <h1>Progress Bar</h1>
        <input type='number' min='0' max='100' placeholder='Insert Progress value...' value={this.state.progressValue} onChange={event => this.onChangeProgressValue(event)} />
        <ProgressBar value={parseInt(this.state.progressValue)} animationDuration={100} />
        <h1>Snackbar</h1>
        <button type='button' onClick={() => this.showSnackbar()} disabled={this.state.showSnackbar}>Show</button>
        <input type='text' id='message' placeholder='Insert a message...' value={this.state.messageValue} onChange={event => this.onChangeMessageValue(event)} />
        <Snackbar message={this.state.messageValue} show={this.state.showSnackbar} onHide={() => this.onSnackbarHide()} />
      </div>
    )
  }
}
