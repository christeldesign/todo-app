import React, { Component } from 'react';
import ToDoList from './ToDoList.js';

class ToDoInput extends React.Component {
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
    this.handleDelete = this.handleDelete.bind(this);

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
      this.setState({ errorMessage: 'Please enter an item to add to your To Do List.' })
    } else if (this.state.toDoList.indexOf(this.state.value) >= 0) {
      // If input value has already been used, send error message (since using this as key, has to be unique)
      this.setState({ errorMessage: 'Oops! This item already exists, try again.' });
    } else {
      // Erase error message...
      this.setState({ errorMessage: '' });
      // Add submitted item to end of array
      this.setState({ toDoList: [...this.state.toDoList, this.state.value] });
    }
  }

  handleDelete (itemToDelete) {
    // Get items array from state
    var toDoItems = this.state.toDoList
    // Get index of item to delete in array
    var index = toDoItems.indexOf(itemToDelete);
    // Remove item to delete from array
    toDoItems.splice(index, 1);
    // Set state to rerender
    this.setState({
      toDoList: toDoItems,
      errorMessage: '' });
  }

  render () {

    return (
      <div className='to-do-input'>
        <p className='error-message'>{this.state.errorMessage}</p>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>

        <ToDoList
          list = {this.state.toDoList}
          delete = {this.handleDelete}
        />
      </div>
    );
  }
}

export default ToDoInput;
