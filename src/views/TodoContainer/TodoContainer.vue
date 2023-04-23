<template>
  <div class="TodoContainer">
    <h1 style="font-size: 3rem; color: #ea5959">Groceries</h1>
    <input class="todoSearchInput" type="text" placeholder="Search.." />
    <div class="list-group mt-3">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoContainer/TodoListItem.vue";
import { todos } from "@/data";
export default {
  name: "TodoContainer",
  data() {
    return {
      todos: todos,
    };
  },
  components: { TodoListItem },
};
</script>

<style scoped>
.TodoContainer {
  max-width: 1000px;
  width: 95%;
  height: 100%;
  display: flex;

  flex-direction: column;
}
.todoSearchInput {
  width: 80%;
  height: 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  outline: 5px solid transparent;
  font-size: 1.2rem;
  padding-left: 1rem;
  margin-top: 1rem;
  transition: box-shadow, outline 0.5s ease-in-out;
}
.todoSearchInput:focus {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  outline: 5px solid rgba(0, 0, 0, 0.05);
}
.list-group {
  overflow: scroll;
  flex: 1;
}
</style>
