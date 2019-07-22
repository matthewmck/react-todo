import React from 'react';
import { Consumer } from '../context';

const Action = () => {
    return (
        <Consumer>
            {value => {
                const { todos, dispatch } = value;
                return (
                    <React.Fragment>
                        <button className="main-btn" onClick={() => handleSelection(todos, dispatch)}>What Should I Do?</button>
                    </React.Fragment>
                );
            }}
        </Consumer>
    );
};

const handleSelection = (todos, dispatch) => {
    const randomNum = Math.floor(Math.random() * todos.length);
    dispatch({ type: 'OPEN_MODAL', payload: todos[randomNum] });
};

export default Action;