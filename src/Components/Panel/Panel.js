import './Panel.css'

import React from 'react'
import PropTypes from 'prop-types'
import { panelActivator } from '../../actions/index'

const Panel = ({ color, numSound, panelActivator }) => (
  <div onClick={panelActivator} className={`panel ${color}`} id={color.substring(0, 1)}>
    <audio src={`https://s3.amazonaws.com/freecodecamp/simonSound${numSound}.mp3`} id={`panel-tone-${color}`} />
  </div>
)
Panel.propTypes = {
  color          : PropTypes.string.isRequired,
  numSound       : PropTypes.number.isRequired,
  panelActivator : PropTypes.func.isRequired
}
Panel.defaultProps = {}

export default Panel
