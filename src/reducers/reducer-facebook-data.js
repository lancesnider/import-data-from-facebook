
const defaultFacebookData = {}

export default function (state = defaultFacebookData, action = -1) {
  switch (action.type) {

    case 'RECIEVE_FACEBOOK_DATA':
      return Object.assign({}, state, {
        ...action.fbData
      })

    default:
      return state

  }
}
