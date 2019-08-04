<template>
  <b-form id="TodoForm" @submit.prevent="onSubmit">
    <label id="label-1" label-for="input-todo" class="sr-only">Enter a Todo</label>
    <b-row>
      <b-col md="10">
        <b-form-input
          id="input-todo"
          class="w-100"
          v-model="todoText"
          type="text"
          required
          placeholder="Enter your todo"
        ></b-form-input>
      </b-col>
      <b-col md="2">
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
export default {
  name: "TodoForm",
  props: ["addTodo"],
  data() {
    return {
      todoText: ""
    };
  },
  components: {},
  methods: {
    onSubmit() {
      if (this.todoText.length > 0) {
        this.addTodo(this.todoText);
        this.todoText = "";
      } else {
        alert("Todo text must not be blank");
      }
    }
  }
};
</script>

<style>
b-form-input {
  margin: 10px;
}

b-button {
  margin: 10px;
}
</style>
