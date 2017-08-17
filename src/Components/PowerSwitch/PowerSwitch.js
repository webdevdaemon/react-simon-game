import './PowerSwitch.css'

import React from 'react'
import PropTypes from 'prop-types'

const PowerSwitch = ({ powerOn, powerToggle }) => (
  <div className='power-switch'>
    <div className={`switch ${powerOn ? 'on' : ''}`}>
      <button className='knob' id='on-off' onClick={powerToggle}>
        {powerOn ? 'ON' : 'OFF'}
      </button>
    </div>
  </div>
)
PowerSwitch.propTypes = {
  powerOn: PropTypes.bool.isRequired,
  powerToggle: PropTypes.func,
}
PowerSwitch.defaultProps = {
  powerOn : false
}

export default PowerSwitch
