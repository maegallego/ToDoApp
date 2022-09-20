<template>
  <div class='home'>
    <h1>vista home</h1>
    <CreateTask />
    <!-- <button @click="onlyCompleted"></button> -->
    <div v-for="task in onlyCompleted" :key="task.id" :id="task.id">
      <p>{{task.title}}</p>
    </div>
    <TaskTemplate />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import CreateTask from '@/components/CreateTask.vue';
import TaskTemplate from '@/components/TaskTemplate.vue';

export default {
  name: 'HomeView',
  // data() {
  //   return {
  //     showOnlyCompleted: false,
  //   };
  // },
  computed: {
    ...mapState(taskStore, ['tasks', 'onlyCompleted']),
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
  components: { CreateTask, TaskTemplate },
};
</script>
