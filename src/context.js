import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_TODOS':
      return {
        ...state,
        todos: state.todos = []
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ],
        error: undefined
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        selectedOption: action.payload
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        selectedOption: undefined
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    todos: [],
    selectedOption: undefined,
    error: undefined,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  };
}

export const Consumer = Context.Consumer;