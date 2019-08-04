import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);


  const addTodo = (todoText) => {
    const todo = { id: nextIndex, text: todoText, completed: false };

    setTodos([...todos, todo]);
    setNextIndex(nextIndex + 1);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <Container className="App">
      <h2>React Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </Container>
  );
}

export default App;
