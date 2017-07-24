import './GamePanels.css'
import React from 'react'
// import PropTypes from 'prop-types'
import Panel from '../Panel/index'
import PanelRow from '../PanelRow/index'

const GamePanels = () => (
	<div className="simon">
   <PanelRow isTopRow={true}>
     <Panel color='red' numSound={1} />
     <Panel color='green' numSound={2} />
   </PanelRow>
   <PanelRow isTopRow={false}>
     <Panel color='blue' numSound={3} />>
     <Panel color='yellow' numSound={4} />
   </PanelRow>
 </div>
)



























































// GamePanels.defaultProps = {}

export default GamePanels
