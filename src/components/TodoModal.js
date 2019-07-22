import React from 'react';
import { Consumer } from '../context';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TodoModal = () => {
    return (
        <Consumer>
            {value => {
                const { selectedOption, dispatch } = value;
                return (
                    <Modal
                        isOpen={!!selectedOption}
                        onRequestClose={handleCloseModal}
                        contentLabel="Selected Option"
                        closeTimeoutMS={200}
                    >
                        <h3>Selected Option</h3>
                        <p>{selectedOption}</p>
                        <button onClick={() => handleCloseModal(selectedOption, dispatch)}>Okay</button>
                    </Modal>
                );
            }}
        </Consumer>
    );
};

const handleCloseModal = (selectedOption, dispatch) => {
    if  (selectedOption) {
        dispatch({ type: 'CLOSE_MODAL' });
    }
};

export default TodoModal;