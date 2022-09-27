<template>
  <div class='margin'>
    <div class='addtask-container purple-shadow centered-div'>
      <h1>Add a new task</h1>
      <CreateTask />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import CreateTask from '@/components/CreateTask.vue';

export default {
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'deleteTask']),
  },
  created() {
    this.fetchTasks();
  },
  components: { CreateTask },
};
</script>
