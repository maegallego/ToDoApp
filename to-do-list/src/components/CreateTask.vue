<template>
  <div>
    <h2>Create Task</h2>
      <form>
          <div>
              <label for='titleTask'>Task
                  <input
                  name='titleTask'
                  type='text'
                  placeholder='New Task'
                  v-model='titleTask'
                  />
              </label>
          </div>
          <button @click.prevent="handleNewTask">Create</button>
      </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'AuthView.vue',
  data() {
    return {
      titleTask: '',
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['createTask']),
    handleNewTask() {
      const newTask = {
        title: this.titleTask,
        user_id: this.user.id,
      };
      this.createTask(newTask);
    },
  },
};
</script>
