import React, { Component } from 'react';

class ToDoList extends React.Component {
  // Constructor...
  constructor (props) {
    super(props);

    // Bind function..
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Function to handle deleting item
  handleDelete (event) {
    const target = event.target;
    // Get index of list item in array
    const index = this.props.toDoList.indexOf(target.name);
    // Remove list item from array
    this.props.toDoList.splice(index, 1);
    // Set state to correct list array
    this.setState({ toDoList: this.props.ToDoList });
  }

  render () {
    return (
      <div className='to-do-list'>
        <h2>To Do List</h2>
        <ul>
          {this.props.toDoList.length < 1 &&
            <p className='nothing'>Hurray! You have nothing to do!</p>
          }
          {this.props.toDoList.map((toDoListItem) =>
            <li key= {toDoListItem}>
              <input type='checkbox'
                     name={toDoListItem}
                     onChange={this.handleDelete} />
              {toDoListItem}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
