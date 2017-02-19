import React from 'react'

const TABS_STYLE = {
  position: 'relative',
  width: '100%'
}

const TABLIST_STYLE = {
  overflow: 'hidden',
  border: '1px solid #ccc',
  backgroundColor: '#f1f1f1',
  height: '50px'
}

const TAB_LINK_STYLE = {
  float: 'left',
  display: 'block',
  color: 'black',
  textAlign: 'center',
  padding: '14px 16px',
  fontSize: '17px'
}

export default class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: props.activeIndex
    }
  }

  getChildren () {
    return this.props.children.map((tab, index) => {
      return React.cloneElement(tab, {
        key: index,
        active: index === this.state.activeIndex
      })
    })
  }

  onLinkClick (index) {
    this.setState({
      activeIndex: index
    })
  }

  renderLink (text, index) {
    const linkStyle = Object.assign({}, TAB_LINK_STYLE)
    if (index === this.state.activeIndex) {
      linkStyle.backgroundColor = '#ccc'
    }

    return <a key={index} style={linkStyle} onClick={() => this.onLinkClick(index)}>{text}</a>
  }

  render () {
    return (
      <div style={TABS_STYLE}>
        <div style={TABLIST_STYLE}>
          {this.props.links.map((link, index) => this.renderLink(link, index))}
          {this.getChildren()}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  activeIndex: React.PropTypes.number,
  links: React.PropTypes.arrayOf(React.PropTypes.string)
}

Tabs.defaultProps = {
  activeIndex: 0,
  links: []
}
