<template>
  <div class="list-item py-2 d-flex align-items-center justify-content-between">
    <div style="" class="d-flex align-items-center">
      <div
        @click="checkTodo"
        class="checkButton d-flex align-items-center justify-content-center me-2"
      >
        <img v-show="isCompleted" src="@/assets/checkIcon.svg" />
      </div>
      <p
        :style="isCompleted && 'text-decoration-line:line-through;opacity:0.5'"
        class="p-0 m-0"
      >
        Purchase Miladsgklmfadlmkgmkldagmlkdamlkgk & Corn Flakes
      </p>
    </div>
    <div class="d-flex align-items-center">
      <span :style="isCompleted && 'opacity:.5'" class="categorySpan me-4"
        >Groceries</span
      >
      <img @click="deleteTodo" class="trashBin" src="@/assets/trashBin.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListGroup",
  data() {
    return {
      isCompleted: false,
    };
  },
  methods: {
    checkTodo() {
      this.isCompleted = !this.isCompleted;
    },
    deleteTodo(e) {
      e.currentTarget.parentElement.parentElement.remove();
    },
  },
};
</script>

<style scoped>
.list-item {
  border: 2px solid rgba(234, 89, 89, 0.2);
  border-radius: 8px;
  padding: 0px 10px;
}
.checkButton {
  border: 2px solid #ea5959;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
}
.checkButton:hover {
  box-shadow: 0px 0px 5px 5px rgba(234, 89, 89, 0.2);
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
