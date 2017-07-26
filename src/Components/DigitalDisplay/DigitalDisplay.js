import './DigitalDisplay.css'

import React from 'react'
import PropTypes from 'prop-types'

const DigitalDisplay = ({displayValue, nodeClass, nodeID, nodeLabel, visible}) => (
	<div className={`game-control ${nodeClass}`}>
    <p id={nodeID} className={`${visible ? 'viz' : 'no-viz'}`} >
      {displayValue}
    </p>
    <p className='game-control-label'>{nodeLabel}</p>
  </div>
)
DigitalDisplay.propTypes = {
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  nodeClass: PropTypes.string.isRequired,
  nodeID: PropTypes.string.isRequired,
  nodeLabel: PropTypes.string,
  visible: PropTypes.bool.isRequired,
}
DigitalDisplay.defaultProps = {
  displayValue: '--',
  nodeClass: 'position',
  nodeID: 'steps',
  nodeLabel: 'steps',
  visible: false,
}

export default DigitalDisplay
