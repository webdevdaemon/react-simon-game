import './Panel.css'

import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({color, numSound}) => (
  <div className={`panel ${color}`} id={color.substring(0,1)}>
   <audio src={`https://s3.amazonaws.com/freecodecamp/simonSound${numSound}.mp3`} id={`panel-tone-${color}`}></audio>
 </div>
)
Panel.propTypes = {
  color: PropTypes.string.isRequired,
  numSound: PropTypes.number.isRequired
}
Panel.defaultProps = {}

export default Panel
