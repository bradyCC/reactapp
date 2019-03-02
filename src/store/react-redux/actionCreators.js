/**
 * Created by brady on 2019/3/2.
 */

import { CHANGE_INPUT_VALUE } from './actionTypes'

export const getInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
