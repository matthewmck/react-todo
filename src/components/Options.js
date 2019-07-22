import React from 'react';
import { Consumer } from '../context';
import Option from './Option';
import uuid from 'uuid';


const Options = () => {
  return (
    <Consumer>
      {value => {
        const { todos, dispatch } = value;
        return (
          <React.Fragment>
            <div className="option-header">
              <span>Your Options</span>
              <button onClick={deleteTodos.bind(this, dispatch)}>Remove All</button>
            </div>
            <div className="option-body">
              {todos.length === 0 && <p>Please add an option to get started!</p>}
              {todos.map(todo => (
                <Option
                  key={uuid()}
                  todo={todo}
                  dispatch={dispatch}
                />
              ))}
            </div>
          </React.Fragment> 
        );
      }}
    </Consumer>
  );
}

const deleteTodos = (dispatch) => {
  dispatch({ type: 'DELETE_TODOS' });
};

export default Options;