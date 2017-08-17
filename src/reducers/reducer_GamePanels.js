export const $Gameplay = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_PANEL':
      return action.activePanel
    default:
      return state
  }
}
