export const $GameState = (state = {}, action) => {
  switch (action.type) {
    case 'POWER_ON':
      return Object.assign({}, state, {
        powerOn: true
      })
    case 'POWER_OFF':
      return Object.assign({}, state, {
         powerOn: false
      })
    default:
      return state
  }
}
