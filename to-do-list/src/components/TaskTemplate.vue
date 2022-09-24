<template>
  <div>
    <p>{{ taskProp.title }}</p>
    <p>{{ taskProp.description }}</p>
    <button @click='handleDelete(taskProp.id, index)'>Delete</button>
    <router-link :to="`/edit/${taskProp.id}`">Edit</router-link>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  props: {
    taskProp: Object,
  },
  methods: {
    ...mapActions(taskStore, ['deleteTask', 'getTaskById']),
    handleDelete(id, index) {
      this.deleteTask(id, index);
    },
  },
};
</script>
