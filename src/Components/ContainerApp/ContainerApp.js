import React, { Component } from 'react'
import { connect } from 'react-redux'
import { panelActivator } from '../../actions/index'
import { bindActionCreators } from 'redux'
import ControlPanel from '../ControlPanel/index'
import GamePanels from '../GamePanels/index'
import Button from '../Button/index'
import DigitalDisplay from '../DigitalDisplay/index'
import PowerSwitch from '../PowerSwitch/index'

class ContainerApp extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <div className='app'>
          <ControlPanel>
            <div className='unit-label'>
              <span className='label top'>simon</span>
              <span className='label bottom'>SEZ</span>
            </div>
            <div className='interface'>
              <DigitalDisplay />
              <Button buttonClass='game-control start-reset' buttonID='button-toggle' buttonLabel='start/reset' />
              <Button buttonClass='game-control mode' buttonID='button-mode' buttonLabel='mode' />
            </div>
            <PowerSwitch powerOn={this.props.powerOn} />
          </ControlPanel>
          <GamePanels panelActivator={panelActivator} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  game : state.game
})

const mapDispatchToProps = dispatch => bindActionCreators({ panelActivator }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContainerApp)
