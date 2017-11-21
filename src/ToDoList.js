import React, { Component } from 'react';

class ToDoList extends React.Component {
  // Constructor...
  constructor (props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  // Function to handle deleting item
  delete (itemToDelete) {
    this.props.delete(itemToDelete);
  }

  render () {
    return (
      <div className='to-do-list'>
        <h2>To Do List</h2>
        <ul>
          {this.props.list.length < 1 &&
            <p className='nothing'>Hurray! You have nothing to do!</p>
          }
          {this.props.list.map((toDoListItem) => {
            return (
              <li key= {toDoListItem}>
                <input type='checkbox' onChange={(e) => this.delete(toDoListItem, e)} />
                {toDoListItem}
              </li>
            );
          })
          }
        </ul>
      </div>
    )
  }
}

export default ToDoList;
