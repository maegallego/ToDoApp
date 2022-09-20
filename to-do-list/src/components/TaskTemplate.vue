<template>
  <div v-for='(task, index) in tasks' :key='task.id' :id='task.id'>
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
    <button @click='handleDelete(task.id, index)'>Delete</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'deleteTask']),
    handleDelete(id, index) {
      this.deleteTask(id, index);
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
