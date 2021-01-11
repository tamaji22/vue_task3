import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      // ToDoリストを保存
      todoLists: [],
    };
  },
  getters: {
    // ToDoリストを取得
    todoLists(state) {
      return state.todoLists;
    },
  },
  mutations: {
    // ToDoリストにタスクを追加
    addTodoList(state, { comment, status }) {
      state.todoLists.push({ comment: comment, status: status });
    },
  },
  actions: {},
  modules: {},
});
