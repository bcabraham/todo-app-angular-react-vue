import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import '../App.css';


function Todo({ todo, removeTodo }) {
  const [todoItem, setTodoItem] = useState(todo);

  const toggleDone = () => {
    setTodoItem({
      ...todoItem,
      "completed": !todoItem.completed
    });
  }

  return (
    <ListGroup.Item className="Todo">
      <Row>
        <Col sm={8}><p className={todoItem.completed ? "isDone" : ""}>{todoItem.text}</p></Col>
        <Col sm={2}><Button onClick={toggleDone}>{todoItem.completed ? "unDone" : "Done"}</Button></Col>
        <Col sm={2}><Button onClick={() => removeTodo(todoItem.id)}>Delete</Button></Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Todo;
