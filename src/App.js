import React, {Component} from 'react'
import GamePanels from './Components/GamePanels/GamePanels'
import './App.css'
import ContainerSimon from './Components/ContainerSimon/index'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <ContainerSimon />

        <div className="app">
          <div className="center" id="c-panel">
            <div className="unit-label">
              <span className="label top">simon</span>
              <span className="label bottom">SEZ</span>
            </div>
            <div className="interface">
              <div className="ui-node position">
                <p className="steps no-viz">--</p>
                <p className="ui-label">steps</p>
              </div>
              <div className="ui-node start-reset">
                <button id="toggle" />
                <p className="ui-label">start/reset</p>
              </div>
              <div className="ui-node strict">
                <button id="init" />
                <p className="ui-label">strict</p>
              </div>
            </div>
            <div className="power-switch">
              <div className="switch">
                <button className="knob" id="on-off">
                  OFF
                </button>
              </div>
            </div>
          </div>

          <GamePanels />
        </div>
      </div>
    )
  }
}

export default App
