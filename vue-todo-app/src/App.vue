<template>
  <b-container id="app">
    <h1>{{ message }}</h1>
    <TodoForm :addTodo="addTodo" />
    <TodoList :todos="todos" :removeTodo="removeTodo" />
  </b-container>
</template>

<script>
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default {
  name: "app",
  data: function() {
    return {
      message: "Vue Todo App",
      todos: [],
      nextIndex: 0
    };
  },
  methods: {
    addTodo(todoText) {
      this.todos.push({ id: this.nextIndex, text: todoText, completed: false });
      this.nextIndex++;
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      });
    }
  },
  components: {
    TodoForm: TodoForm,
    TodoList: TodoList
  }
};
</script>

<style>
</style>
