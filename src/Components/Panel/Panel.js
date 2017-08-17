import './Panel.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  render() {
    let {color, numSound, panelActivator} = this.props
    return (
      <div onClick={panelActivator} className={`panel panel-${color}`} id={color}>
        <audio src={`https://s3.amazonaws.com/freecodecamp/simonSound${numSound}.mp3`} id={`panel-tone-${color}`} />
      </div>
    )
  }
}

Panel.propTypes = {
  color: PropTypes.string.isRequired,
  numSound: PropTypes.number.isRequired,
  panelActivator: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
}

Panel.defaultProps = {}

export default Panel
