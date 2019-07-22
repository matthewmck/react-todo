import React from 'react';
import { Consumer } from '../context';

const AddTodo = () => {
    return (
        <Consumer>
            {value => {
                const { error, dispatch } = value;
                return (
                    <div>
                        {error && <p>{error}</p>}
                        <form onSubmit={(e) => handleAddOption(e, dispatch)}>
                            <input type="text" name="option" />
                            <button>Add Option</button>
                        </form>
                    </div>
                );
            }}
        </Consumer>
    );
};

const handleAddOption = (e, dispatch) => {
    e.preventDefault();
    const value = e.target.elements.option.value.trim();

    if (!value) {
        dispatch({ type: 'ERROR', payload: "Please enter a valid value to add item."})
    } else {
        e.target.elements.option.value = '';
        dispatch({ type: 'ADD_TODO', payload: value });
    }

};

export default AddTodo;