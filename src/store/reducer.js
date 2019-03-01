/**
 * Created by brady on 2019/3/1.
 */

import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM} from './actionTypes'

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
    case ADD_LIST_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_LIST_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}
