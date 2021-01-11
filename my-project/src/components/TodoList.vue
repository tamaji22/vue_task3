<template>
  <div>
    <h1>ToDoリスト</h1>
    <form>
      <!-- ステータスに応じて表示するToDoリストを選択 -->
      <input type="radio" v-model="select" name="status" value="all" />すべて
      <input type="radio" v-model="select" name="status" value="working" />作業中
      <input type="radio" v-model="select" name="status" value="done" />完了
    </form>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <!-- ToDoリストの表示 -->
      <tbody v-for="(todoList, index) in todoLists" :key="index">
        <tr>
          <td>{{ index }}</td>
          <td>{{ todoList.comment }}</td>
          <td>
            <button>
              {{ todoList.status }}
            </button>
          </td>
          <td><button>削除</button></td>
        </tr>
      </tbody>
    </table>
    <!-- 新規タスクをToDoリストに追加 -->
    <h2>新規タスクの追加</h2>
    <input type="text" v-model="comment" name="task" />
    <input type="button" @click="addTodoList" value="追加" />
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      select: 'all', // ラジオボタンのステータス
      comment: '', // 入力したタスク
    };
  },
  computed: {
    // ToDoリストの取得
    todoLists() {
      return this.$store.getters.todoLists;
    },
  },
  methods: {
    // ToDoリストにタスクを追加
    addTodoList() {
      this.$store.commit('addTodoList', { comment: this.comment, status: '作業中' });
      this.comment = ''; // タスクを追加した後に入力したテキストを消去
    },
  },
};
</script>
