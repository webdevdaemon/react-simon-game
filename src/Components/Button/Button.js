import './Button.css'

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({buttonClass, buttonID, buttonText, buttonLabel}) => (
  <div className={`${buttonClass}`}>
    <button className={`${buttonClass}`} id={buttonID}>
      <p>{buttonText}</p>
    </button>
    {buttonLabel ? <p className='game-control-label'>{buttonLabel}</p> : null}
  </div>
)
Button.propTypes = {
  buttonClass : PropTypes.string,
  buttonID    : PropTypes.string,
  buttonText  : PropTypes.string,
  buttonLabel : PropTypes.string
}
Button.defaultProps = {
  buttonClass : 'button',
}

export default Button
