import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <div className="TodoForm">
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Label column sm={2} srOnly>
            Enter a Todo
    </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter a Todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
          </Col>
          <Col sm={2}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

export default TodoForm;
