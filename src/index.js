import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ToDoList from "./components/ToDoList";

ReactDOM.render(<ToDoList />, document.getElementById('root'));
serviceWorker.unregister();
