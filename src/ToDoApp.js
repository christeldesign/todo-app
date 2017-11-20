import React, { Component } from 'react';
import './ToDoApp.css';
import ToDoList from './ToDoList.js';

class ToDoApp extends React.Component {
  // Constructor...
  constructor (props) {
    super(props);

    // Set initial state...
    this.state = {
      value: '',
      toDoList: []
    };

    // Bind functions...
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function to attach input value to state
  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  // Function to handle submit
  handleSubmit (event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
    // If input is empty...
    if (this.state.value === '') {
      alert('Please enter an item to add to your To Do List!');
    } else {
      // Add submitted item to end of array
      this.setState({ toDoList: [...this.state.toDoList, this.state.value] });
    }
  }

  render () {
    return (
      <div class='to-do-app'>
        <h1>To Do App</h1>
        <p class='instructions'>Enter To Do Items in the field below, and click "Add" to add it to your list. When you have completed an item, delete it by checking off the checkbox.</p>
        <input type='text'
                 value={this.state.value}
                 onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>

        <ToDoList
          toDoList = {this.state.toDoList}
        />
      </div>
    );
  }
}

export default ToDoApp;
