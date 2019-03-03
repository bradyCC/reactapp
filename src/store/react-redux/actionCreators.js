/**
 * Created by brady on 2019/3/2.
 */

import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const getInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
