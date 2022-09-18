<template>
  <div>
    <h2>Create Task</h2>
      <form>
          <div>
              <label for='titleTask'>Task
                  <input
                  name='titleTask'
                  type='text'
                  placeholder='Ir a Correos'
                  v-model='titleTask'
                  />
              </label>
          </div>
          <div>
            Select priority : {{ priority }}
            <br />
            <select v-model='priority'>
              <option value='4' selected>Low</option>
              <option value='3'>Medium</option>
              <option value='2'>High</option>
              <option value='1'>Urgent</option>
            </select>
          </div>
          <div>
            <textarea v-model='description' placeholder='Llevar el DNI. Recoger carta.'></textarea>
          </div>
          <input type='checkbox' id='checkbox' v-model='is_complete' />
          <label for='is_complete'>Task completed</label>
          <button @click.prevent='handleNewTask'>Crear nueva tarea</button>
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
      priority: '',
      description: '',
      completed: 'false',
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
        priority: this.priority,
        description: this.description,
        is_complete: this.is_complete,
      };
      this.createTask(newTask);
    },
  },
};
</script>
