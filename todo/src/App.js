import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import Todo from './components/Todo'

class App extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

export default App;
