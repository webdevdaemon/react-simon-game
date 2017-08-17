import './GamePanels.css'
import React from 'react'
import PropTypes from 'prop-types'
import Panel from '../Panel/index'
import PanelRow from '../PanelRow/index'

const GamePanels = ({ panelActivator, activate }) => (
  <div className='simon'>
    <PanelRow isTopRow={true}>
      <Panel panelActivator={panelActivator} color='red' numSound={1} />
      <Panel panelActivator={panelActivator} color='green' numSound={2} />
    </PanelRow>
    <PanelRow isTopRow={false}>
      <Panel panelActivator={panelActivator} color='blue' numSound={3} />>
      <Panel panelActivator={panelActivator} color='yellow' numSound={4} />
    </PanelRow>
  </div>
)

GamePanels.propTypes = {
  panelActivator: PropTypes.func.isRequired,
  activate: PropTypes.string,
}

GamePanels.defaultProps = {
  activate: ''
}

export default GamePanels
