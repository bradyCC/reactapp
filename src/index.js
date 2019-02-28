import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AntdDemo from "./components/AntdDemo";

ReactDOM.render(<AntdDemo />, document.getElementById('root'));
serviceWorker.unregister();

