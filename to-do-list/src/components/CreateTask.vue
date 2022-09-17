<template>
  <div>
    <h2>Create Task</h2>
      <form @submit.prevent='handleNewTask'>
          <div>
              <label for='tasks'>Task
                  <input id='Tasks'
                  type='text'
                  placeholder='New Task'
                  v-model='tasks'
                  />
              </label>
          </div>
          <button @click="handleNewTask">Create</button>
      </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'AuthView.vue',
  data() {
    return {
      tasks: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['newTask']),
    handleNewTask() {
      const userData = {
        tasks: this.tasks,
      };
      this.newTask(userData.tasks);
    },
  },
};
</script>
