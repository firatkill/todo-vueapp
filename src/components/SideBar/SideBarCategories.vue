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
      <div @click="changeCategory('All')" class="listItem">All</div>
      <div
        class="listItem"
        @click="changeCategory(category)"
        v-for="category in todoCategories"
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
export default {
  name: "SideBarCategories",
  data() {
    return {
      categorySearch: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    todoCategories() {
      const categories = this.$store.getters.getCategories;
      if (this.categorySearch == "") {
        return categories;
      } else {
        return categories.filter((category) =>
          category.toLowerCase().includes(this.categorySearch.toLowerCase())
        );
      }
    },
  },
  methods: {
    resetCategories() {
      this.filteredCategories = this.todoCategories.slice(0);
      this.categorySearch = "";
    },
    changeCategory(category) {
      this.$store.dispatch("changeCategory", category);
    },
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
