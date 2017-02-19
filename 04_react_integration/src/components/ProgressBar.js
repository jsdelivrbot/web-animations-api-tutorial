import React from 'react'

const CONTAINER_STYLE = {
  width: '100%',
  backgroundColor: 'grey'
}

const BAR_STYLE = {
  height: '30px',
  backgroundColor: 'green'
}

const animate = (element, from = 0, to, duration) => {
  const timing = {
    duration: duration,
    fill: 'forwards',
    easing: 'ease-out'
  }

  const keyframes = [
    {
      width: `${from}%`
    },
    {
      width: `${to}%`
    }
  ]

  const effect = new KeyframeEffect(element, keyframes, timing)

  const animation = new Animation(effect, document.timeline)

  animation.play()
}

export default class ProgressBar extends React.Component {

  constructor (props) {
    super(props)
    const value = this.props.value || 0
    this.barStyle = Object.assign({}, BAR_STYLE, { width: value + '%' })
    this.bar = null
  }

  componentWillReceiveProps (nextProps) {
    const currentValue = this.props.value
    const nextValue = Math.min(nextProps.value, 100)
    if (currentValue !== nextValue) {
      animate(this.bar, currentValue, nextValue, this.props.animationDuration)
    }
  }

  render () {
    return (
      <div style={CONTAINER_STYLE}>
        <div ref={bar => { this.bar = bar }} style={this.barStyle} />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  value: React.PropTypes.number.isRequired,
  animationDuration: React.PropTypes.number
}

ProgressBar.defaultProps = {
  animationDuration: 500
}
