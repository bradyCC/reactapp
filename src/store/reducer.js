/**
 * Created by brady on 2019/3/1.
 */
const defaultState = {
  inputValue: '',
  list: [1,2]
}

export default (state = defaultState, action) => {
  let newState
  switch (action.type) {
    case 'change_input_value':
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
      // state.inputValue = action.value
      // return state
    case 'add_list_item':
      newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
      // state.list.push(state.inputValue)
      // state.inputValue = ''
      // return state
    default:
      return state
  }
}
