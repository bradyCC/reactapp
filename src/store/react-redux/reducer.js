/**
 * Created by brady on 2019/3/2.
 */
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}
