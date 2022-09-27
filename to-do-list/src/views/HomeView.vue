<template>
  <div class='home margin' id='home'>
    <h1>Your list of tasks.</h1>
    <div v-if='this.tasks.length === 0'>
      <p>No tasks yet!</p>
      <router-link class='transparent-btn centered-div' to='/new-task'>Add a new task</router-link>
    </div>
    <div class='grid-2' v-if='this.tasks.length'>
      <div>
        <h2>Pending tasks</h2>
        <div v-if='this.onlyPending.length === 0'>
          <p>You've completed all your tasks.</p>
        </div>
        <div v-for='task in onlyPending' :key='task.id' :id='task.id'>
          <TaskTemplate :taskProp='task' />
        </div>
      </div>
      <div>
        <h2>Completed tasks</h2>
        <div v-if='this.onlyCompleted.length === 0'>
          <p>No tasks completed yet.</p>
        </div>
        <div v-for='task in onlyCompleted' :key='task.id' :id='task.id'>
          <TaskTemplate :taskProp='task' />
        </div>
      </div>
    </div>
    <div v-if='this.tasks.length'>
      <router-link class='transparent-btn centered-div' to='/#home'>
        <span class='material-icons'> arrow_upward </span> Return to
        top</router-link
      >
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
