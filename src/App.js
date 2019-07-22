import React, { Component } from 'react';
import { Provider } from './context';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddTodo from './components/AddTodo';
import TodoModal from './components/TodoModal';
import 'normalize.css/normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Header />
          <div className="content-wrap">
            <Action />
            <div className="container">
              <Options />
              <AddTodo />
            </div>
          </div>
          <TodoModal/>
        </Provider>
      </div>
    );
  }
}

export default App;
