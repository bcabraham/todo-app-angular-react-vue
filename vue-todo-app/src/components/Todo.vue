<template>
  <b-list-group-item id="Todo">
    <b-row>
      <b-col md="10" :class="{isDone: this.todo.completed}">{{this.todo.text}}</b-col>
      <b-col md="1" class="pb-2">
        <b-button
          size="md"
          variant="outline-primary"
          @click="toggleDone"
        >{{ this.todo.completed ? "unDone": "Done" }}</b-button>
      </b-col>
      <b-col md="1" class="pb-2">
        <b-button size="md" variant="outline-primary" @click="$emit('remove-todo')">Delete</b-button>
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  components: {},
  methods: {
    toggleDone() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style>
.isDone {
  text-decoration: line-through;
}

b-list-group-item {
  display: inline-block;
}
</style>
