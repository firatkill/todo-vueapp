import { createStore } from "vuex";
import { todos } from "@/data";

const store = createStore({
  state() {
    return {
      todos: todos,
      currentCategory: "All",
      currentTodos: todos,
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
    getTodosByCategory(state) {
      if (state.currentCategory !== "All") {
        return todos.filter((todo) => todo.category === state.currentCategory);
      } else {
        return state.todos;
      }
    },
  },
  mutations: {
    checkTodo(state, id) {
      const todo = state.currentTodos.find((todo) => todo.id === id);
      todo.isCompleted = !todo.isCompleted;
    },
    deleteTodo(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      state.todos.splice(state.todos.indexOf(todo), 1);
      state.currentTodos.splice(state.currentTodos.indexOf(todo), 1);
    },
    addTodo(state, todo) {
      state.todos.push({ id: state.todos.length + 1, ...todo });
      state.currentTodos = todos.filter(
        (temptodo) => temptodo.category === todo.category
      );
    },
    changeCategory(state, category) {
      if (category !== "All") {
        state.currentTodos = todos.filter((todo) => todo.category === category);
      } else {
        state.currentTodos = todos;
      }
      state.currentCategory = category;
    },
  },
  actions: {
    deleteTodo(context, todo) {
      if (context.state.currentTodos.length == 1) {
        context.commit("deleteTodo", todo.id);
        context.commit("changeCategory", "All");
      } else {
        context.commit("deleteTodo", todo.id);
      }
    },
    checkTodo(context, todo) {
      context.commit("checkTodo", todo.id);
    },
    addTodo(context, todo) {
      context.commit("addTodo", todo);
    },
    changeCategory(context, category) {
      context.commit("changeCategory", category);
    },
  },
});

export default store;
