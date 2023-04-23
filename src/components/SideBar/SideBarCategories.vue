<template>
  <div class="d-flex flex-column justify-content-center" style="height: 50%">
    <input
      style="
        font-size: 1.3rem;
        padding: 5px;
        border-radius: 8px;
        margin-bottom: 1rem;
      "
      v-model="categorySearch"
      @input="filterCategories"
      type="text"
      placeholder="Search.."
    />
    <div
      class="list-group"
      style="
        font-size: 1.2rem;
        font-weight: 700;

        border-radius: 20px;

        padding-left: 0.5rem;
        overflow-y: scroll;
        overflow-x: hidden;
      "
    >
      <div @click="resetCategories" class="listItem">All</div>
      <div
        class="listItem"
        v-for="category in filteredCategories"
        :key="todoCategories.indexOf(category)"
      >
        {{ category }}
      </div>
    </div>
    <div
      style="font-weight: 700; font-size: 1.3rem; color: #ea5959"
      class="addButton mt-3"
    >
      <img class="pe-2" src="@/assets/plusCircle.svg" />add new
    </div>
  </div>
</template>

<script>
import { todos } from "@/data";

export default {
  name: "SideBarCategories",
  data() {
    return {
      categorySearch: "",
      todos: todos,
      todoCategories: [],
      filteredCategories: [],
    };
  },
  methods: {
    filterCategories() {
      this.filteredCategories = this.todoCategories.filter((category) =>
        category.toLowerCase().includes(this.categorySearch.toLowerCase())
      );
    },
    resetCategories() {
      this.filteredCategories = this.todoCategories.slice(0);
      this.categorySearch = "";
    },
  },
  beforeMount() {
    const tempCategories = [];
    this.todos.forEach((elem) => {
      if (tempCategories.indexOf(elem.category) == -1) {
        tempCategories.push(elem.category);
      }
    });
    this.todoCategories = tempCategories.slice(0);
    this.filteredCategories = tempCategories.slice(0);
  },
};
</script>

<style scoped>
.list-group:hover {
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.03);
}

.addButton:hover {
  opacity: 0.75;
  cursor: pointer;
}
.listItem:hover {
  cursor: pointer;
  transform: scaleX(1.05);
  transform-origin: left;
  transition: transform 0.5s ease-out;
  color: #ea5959;
}
</style>
