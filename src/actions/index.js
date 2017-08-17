// TOGGLE_POWER
export function powerToggle(e, powerOn) {
  console.log(`powerToggle() has toggled the power:\n`, powerOn ? 'ON' : 'OFF')
  return {
    type: 'TOGGLE_POWER'
  }
}

// ACTIVATE_PANEL
export const panelActivator = (e) => {
  console.log(`panelActivator() has activated:\n`, e.target.id)
  return {
    type: 'ACTIVATE_PANEL'
  }
}

// GENERATE_SEQUENCE

export function generateSequence(length) {
  console.log()
  return {

  }
}
