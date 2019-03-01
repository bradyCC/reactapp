/**
 * Created by brady on 2019/3/1.
 */

import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_STORE_LIST} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}
/**
 * reducer 可以接受state, 但是绝对不能修改state
 * 纯函数指的是, 给定固定的输入，就一定有固定的数据，而且不会有任何副作用
 * */
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
    case INIT_STORE_LIST:
      newState = JSON.parse(JSON.stringify(state))
      newState.list = action.data
      return newState
    default:
      return state
  }
}
