import './GameTitle.css'

import React from 'react'
import PropTypes from 'prop-types'

const GameTitle = ({top, bottom}) => (
	<div className='game-title'>
   <span className='text top'>{top}</span>
   <span className='text bottom'>{bottom}</span>
 </div>
)
GameTitle.propTypes = {
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
}

export default GameTitle
