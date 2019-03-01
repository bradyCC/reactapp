/**
 * Created by brady on 2019/3/1.
 */
import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_STORE_LIST} from './actionTypes'

export const getInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addListItemAction = () => ({
  type: ADD_LIST_ITEM
})

export const deleteListItemAction = (index) => ({
  type: DELETE_LIST_ITEM,
  index
})

export const initStoreListActon = (data) => ({
  type: INIT_STORE_LIST,
  data
})
