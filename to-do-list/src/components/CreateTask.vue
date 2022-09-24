<template>
  <div>
      <form>
          <div>
              <label for='titleTask'>Task
                  <input
                  name='titleTask'
                  type='text'
                  placeholder='Ir a Correos'
                  v-model='titleTask'
                  required
                  />
              </label>
          </div>
          <div>
            Select priority : {{ priority }}
            <br />
            <select v-model='priority'>
              <option value='Low' selected>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
              <option value='Urgent'>Urgent</option>
              required
            </select>
          </div>
          <div>
            <textarea v-model='description' placeholder='Llevar el DNI. Recoger carta.' required>
            </textarea>
          </div>
          <label for='is_complete'>Task completed
            <input type='checkbox' id='checkbox' v-model='is_complete' />
          </label>
          <button @click.prevent='handleNewTask'>Crear nueva tarea</button>
      </form>
    <div v-if="errorMessage">
        {{ errorMessage }}
    </div>
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
      priority: 4,
      description: '',
      completed: false,
      errorMessage: '',
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
      try {
        this.createTask(newTask);
        this.$router.push({ path: '/' });
      } catch (error) {
        this.errorMessage = 'Could not register create a new task.';
        console.log(error.message);
      }
    },
  },
};
</script>
