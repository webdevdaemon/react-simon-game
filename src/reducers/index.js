import {combineReducers} from 'redux'
import {$GameState} from './reducer_GameState'
import {$GameSetup} from './reducer_ControlPanel'
import {$Gameplay} from './reducer_GamePanels.js'

const rootReducer = combineReducers({_Game: $GameState, _Setup: $GameSetup, _Play: $Gameplay})

console.log({rootReducer})
export default rootReducer
