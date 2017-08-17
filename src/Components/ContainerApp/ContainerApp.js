import React, {Component} from 'react'
import {connect} from 'react-redux'
import {panelActivator} from '../../actions/index'
import {powerToggle} from '../../actions/index'
import {bindActionCreators} from 'redux'
import ControlPanel from '../ControlPanel/index'
import GamePanels from '../GamePanels/index'
import Button from '../Button/index'
import DigitalDisplay from '../DigitalDisplay/index'
import PowerSwitch from '../PowerSwitch/index'
import GameControls from '../GameControls/index'
import GameTitle from '../GameTitle/index'

class ContainerApp extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='app-wrapper'>
        <div className='app'>
          <ControlPanel>
            <GameTitle top='simon' bottom='SEZ' />
            <GameControls>
              <DigitalDisplay />
              <Button buttonClass='game-control start-reset' buttonID='button-toggle' buttonLabel='start/reset' />
              <Button buttonClass='game-control mode' buttonID='button-mode' buttonLabel='mode' />
            </GameControls>
            <PowerSwitch powerOn={this.props.powerOn} powerToggle={powerToggle} />
          </ControlPanel>
          <GamePanels panelActivator={panelActivator} activate={this.props.activate || null} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({_Game, _Setup, _Play}) => ({..._Game, ..._Setup, ..._Play})
const mapDispatchToProps = dispatch => bindActionCreators({panelActivator, powerToggle}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContainerApp)
