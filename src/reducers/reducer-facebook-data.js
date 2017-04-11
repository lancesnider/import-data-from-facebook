
const defaultFacebookData = {
  name: 'Nada'
}

export default function (state = defaultFacebookData, action = -1) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN')
      return state

    case 'REQUEST_FACEBOOK_DATA':
      console.log('REQUEST_FACEBOOK_DATA')
      return state

    case 'RECIEVE_FACEBOOK_DATA':
      console.log('RECIEVE_FACEBOOK_DATA')
      return state

    default:
      return state

  }
}
