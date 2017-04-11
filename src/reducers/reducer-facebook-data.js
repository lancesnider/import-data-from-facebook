
const defaultFacebookData = {
  name: 'Nada'
}

export default function (state = defaultFacebookData, action = -1) {
  switch (action.type) {
    case 'CLICK_IMPORT':
      console.log('CLICK_IMPORT')
      return state

    default:
      return state

  }
}
