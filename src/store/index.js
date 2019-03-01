/**
 * Created by brady on 2019/3/1.
 */
import { createStore } from 'redux'
import reducer from './reducer'

/**
 * store是唯一的, 只有store能够改变state值
 * */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
