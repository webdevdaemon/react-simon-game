export const $GameSetup = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_POWER':
      return action.payload
    default:
      return state
  }
}
