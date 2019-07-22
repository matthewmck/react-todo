import React from 'react';

const Option = props => {
  const { todo, dispatch } = props;
  return (
    <div>
      {todo}
      <button onClick={deleteTodo.bind(this, todo, dispatch)}>Remove</button>
    </div>

  );
}

const deleteTodo = (todo, dispatch) => {
  dispatch({ type: 'DELETE_TODO', payload: todo });
};

export default Option;