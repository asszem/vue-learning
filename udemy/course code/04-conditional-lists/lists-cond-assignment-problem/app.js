const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      showTasks: true,
      maxID: 0,
    };
  },
  methods: {
    addTask() {
      this.maxID++;
      this.tasks.push({ taskID: this.maxID, taskText: this.enteredTask });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTasks() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount('#assignment');
