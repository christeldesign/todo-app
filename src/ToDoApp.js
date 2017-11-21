import React, { Component } from 'react';
import './ToDoApp.css';
import ToDoInput from './ToDoInput.js';

class ToDoApp extends React.Component {
  render () {
    // Set document title
    document.title = 'To Do App | Christel Chan';

    return (
      <div className='to-do-app'>
        <h1>To Do App</h1>
        <p>Enter To Do Items in the field below, and click "Add" to add it to your list. When you have completed an item, delete it by checking off the checkbox.</p>
        <ToDoInput />
      </div>
    );
  }
}

export default ToDoApp;
