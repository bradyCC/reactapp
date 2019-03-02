import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ReactReduxDemo from "./components/ReactReduxDemo";
import { Provider } from 'react-redux'
import store from './store/react-redux'

const App = (
  <Provider store={store}>
    <ReactReduxDemo />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();

