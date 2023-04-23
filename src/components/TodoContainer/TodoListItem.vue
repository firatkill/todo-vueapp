<template>
  <div class="list-item py-2 d-flex align-items-center justify-content-between">
    <div
      style="max-width: 70%; overflow: hidden"
      class="d-flex align-items-center"
    >
      <div
        @click="checkTodo"
        class="checkButton d-flex align-items-center justify-content-center me-2"
      >
        <img v-show="todo.isCompleted" src="@/assets/checkIcon.svg" />
        <img
          v-if="!todo.isCompleted"
          style="display: none; opacity: 0.7"
          class="checkButtonImg"
          src="@/assets/checkIcon.svg"
        />
      </div>
      <p
        style="flex-shrink: 0"
        :style="
          todo.isCompleted && 'text-decoration-line:line-through;opacity:0.5'
        "
        class="p-0 m-0"
      >
        {{ todo.name }}
      </p>
    </div>
    <div class="d-flex align-items-center">
      <span
        :style="todo.isCompleted && 'opacity:.5'"
        class="categorySpan text-white me-4"
        >{{ todo.category }}</span
      >
      <img
        @click="deleteTodo(todo.id)"
        class="trashBin"
        src="@/assets/trashBin.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListGroup",
  props: ["todo"],
  data() {
    return {
      currentTodo: this.todo,
    };
  },
  methods: {
    checkTodo() {
      this.$store.dispatch("checkTodo", { id: this.currentTodo.id });
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", { id: id });
    },
  },
};
</script>

<style scoped>
.list-item {
  border-bottom: 1px solid black;
  width: 100%;
  padding: 25px 10px !important;
}
.checkButton {
  border: 2px solid #ea5959;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
}
.checkButton:hover > .checkButtonImg {
  display: block !important;
}
.categorySpan {
  background-color: rgb(234, 89, 89);
  padding: 5px 10px;
  border-radius: 6px;
}
.trashBin:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
