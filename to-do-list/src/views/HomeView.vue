<template>
  <div class='home'>
    <h1>vista home</h1>
    <div v-if='this.tasks.length === 0'>
      <p>No tasks yet!</p>
      <router-link to='/new-task'>Add a new task</router-link>
    </div>
    <h2>Completed tasks</h2>
    <div v-for='task in onlyCompleted' :key='task.id' :id='task.id'>
     <TaskTemplate :taskProp='task' />
    </div>
    <h2>Pending tasks</h2>
    <div v-for='task in onlyPending' :key='task.id' :id='task.id'>
      <TaskTemplate :taskProp='task'/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import TaskTemplate from '@/components/TaskTemplate.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      showOnlyCompleted: false,
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks', 'onlyCompleted', 'onlyPending']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'deleteTask']),
  },
  created() {
    this.fetchTasks();
  },
  components: { TaskTemplate },
};
</script>
