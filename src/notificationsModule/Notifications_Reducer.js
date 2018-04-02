export function clearNotificationsMesaage() {
  return {
    type: 'CLEAR_MESSAGE',
    payload: ''
  };
}

const INITIAL_STATE = {
  toast_message: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

  case "SUCCESS_TOAST":
    //const toast_messages_queue = [...state.toast_messages_queue]
    //toast_messages_queue.push(action.payload)
    return {...state, 'toast_message': action.payload}

  case "CLEAR_MESSAGE":
    return {...state, 'toast_message': ''}

  default:
    return {...state};
  }
}
