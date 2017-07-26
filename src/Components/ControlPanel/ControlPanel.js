import './ControlPanel.css'

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class ControlPanel extends Component {
  render() {
    return (
      <div className='center' id='ControlPanel'>
        {this.props.children}
      </div>
    )
  }
}
// ControlPanel.propTypes = {}
// ControlPanel.defaultProps = {}

export default ControlPanel
