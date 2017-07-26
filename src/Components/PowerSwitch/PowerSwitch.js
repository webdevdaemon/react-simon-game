import './PowerSwitch.css'

import React from 'react'
import PropTypes from 'prop-types'

const PowerSwitch = ({ powerOn }) => (
  <div className='power-switch'>
    <div className={`switch ${powerOn ? 'on' : ''}`}>
      <button className='knob' id='on-off'>
        {powerOn ? 'ON' : 'OFF'}
      </button>
    </div>
  </div>
)
PowerSwitch.propTypes = {
  powerOn : PropTypes.bool.isRequired
}
PowerSwitch.defaultProps = {
  powerOn : false
}

export default PowerSwitch
