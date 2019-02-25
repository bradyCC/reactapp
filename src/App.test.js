import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from "./components/ToDoList";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
