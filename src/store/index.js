import { createStore } from "vuex";
import { todos } from "@/data";

const store = createStore({
  state() {
    return {
      todos: todos,
    };
  },
  getters: {
    getCategories(state) {
      const categories = [];
      state.todos.filter((todo) => {
        if (categories.indexOf(todo.category) == -1) {
          categories.push(todo.category);
        }
      });
      return categories;
    },
  },
  mutations: {
    checkTodo(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      todo.isCompleted = !todo.isCompleted;
    },
    deleteTodo(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
  },
  actions: {
    deleteTodo(context, todo) {
      context.commit("deleteTodo", todo.id);
    },
    checkTodo(context, todo) {
      context.commit("checkTodo", todo.id);
    },
  },
});

export default store;
