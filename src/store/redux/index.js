/**
 * Created by brady on 2019/3/1.
 */

// 使用redux配合中间件
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
)

// store是唯一的, 只有store能够改变state值
const store = createStore(reducer, enhancer)

export default store

