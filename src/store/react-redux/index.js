/**
 * Created by brady on 2019/3/2.
 */

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
