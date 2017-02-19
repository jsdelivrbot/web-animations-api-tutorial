import React from 'react'

const TAB_CONTENT_STYLE = {
  position: 'absolute',
  top: '50px',
  width: '100%'
}

export default class TabContent extends React.Component {
  constructor (props) {
    super(props)
    this.tabStyle = Object.assign({
      opacity: props.active ? 1 : 0
    }, TAB_CONTENT_STYLE)
  }

  render () {
    return (
      <div style={this.tabStyle}>
        {this.props.children}
      </div>
    )
  }
}

TabContent.propTypes = {
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool
}

TabContent.defaultProps = {
  active: false
}
