<template>
  <div id="TodoList" class="mt-4">
    <h2>TodoList</h2>
    <b-list-group>
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        v-on:remove-todo="removeTodo(todo.id)"
      />
    </b-list-group>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  props: ["todos", "removeTodo"],
  components: { Todo: Todo },
  methods: {}
};
</script>

<style>
</style>
