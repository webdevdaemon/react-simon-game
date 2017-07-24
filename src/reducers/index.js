import {combineReducers} from 'redux'
import gameReducer from './reducer_GameState'
// import ControlPanel from './reducer_ControlPanel'
// import GamePanels from './reducer_GamePanels.js'

const rootReducer = combineReducers({
    game: gameReducer
    // control: ControlPanel,
    // panels: GamePanels
})

export default rootReducer
