new Vue({
  el: "#app",
  data: {
    todo: '',
    editingTodo: false,
    index: 0,
    todos: [
      "Eat beans",
      "Get smart",
      "Get Buff"
    ]
  },
  methods: {
    addTodo(todo) {
      if (this.todo != '') {
        this.todos.push(this.todo);
        this.todo = '';
      }
    },
    editTodo(todo, index) {
      this.todo = todo;
    }
  }
})
