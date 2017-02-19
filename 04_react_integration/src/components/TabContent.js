import React from 'react'

const TAB_CONTENT_STYLE = {
  position: 'absolute',
  top: '50px',
  width: '100%'
}

export default class TabContent extends React.Component {
  render () {
    const tabStyle = Object.assign({
      opacity: this.props.active ? 1 : 0
    }, TAB_CONTENT_STYLE)

    return (
      <div style={tabStyle}>
        {this.props.children}
      </div>
    )
  }
}
