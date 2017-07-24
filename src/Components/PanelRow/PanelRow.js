import './PanelRow.css'

import React from 'react'
import PropTypes from 'prop-types'

const PanelRow = ({children, isTopRow}) => (
	<div className={`panel-row ${isTopRow?'top':'bottom'}`}>
    {children}
	</div>
)
PanelRow.propTypes = {
  children: PropTypes.node.isRequired,
  isTopRow: PropTypes.bool.isRequired,
}
PanelRow.defaultProps = {}

export default PanelRow
