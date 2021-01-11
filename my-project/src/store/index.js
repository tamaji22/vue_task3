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
      state.todoLists.push({ comment, status });
    },
    // ToDoリストの削除
    deleteTodoList(state, index) {
      state.todoLists.splice(index, 1);
    },
    // タスクの状態の切り替え
    toggleStatus(state, index) {
      const todoList = state.todoLists[index];
      if (todoList.status === '作業中') {
        todoList.status = '完了';
      } else {
        todoList.status = '作業中';
      }
      state.todoLists.splice(index, 1, todoList);
    },
  },
  actions: {},
  modules: {},
});
