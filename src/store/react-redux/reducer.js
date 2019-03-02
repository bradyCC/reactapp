/**
 * Created by brady on 2019/3/2.
 */
import { CHANGE_INPUT_VALUE } from './actionTypes'

const defaultState = {
  inputValue: 'Hello World',
  list: []
}

export default (state = defaultState, action) => {
  let newState
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    default:
      return state
  }
}
