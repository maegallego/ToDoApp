<template>
  <div v-for='(task, index) in tasks' :key='task.id' :id='task.id'>
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
    <button @click='handleDelete(task.id, index)'>Delete</button>
    <router-link :to="`/edit/${task.id}`">Edit</router-link>
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
    ...mapActions(taskStore, ['fetchTasks', 'deleteTask', 'getTaskById']),
    handleDelete(id, index) {
      this.deleteTask(id, index);
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
