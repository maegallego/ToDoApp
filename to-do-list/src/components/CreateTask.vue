<template>
  <div>
      <form class='align-left'>
          <div>
              <label for='titleTask'>Title
                  <input class='full-width form-input'
                  name='titleTask'
                  type='text'
                  placeholder='Ir a Correos'
                  v-model='titleTask'
                  required
                  />
              </label>
          </div>
          <div>Description
            <textarea v-model='description'
            class='full-width form-input' placeholder='Llevar el DNI. Recoger carta.' required>
            </textarea>
          </div>
          <div></div>
          <div>
            Select priority:
            <select v-model='priority'>
              <option value='Low' selected>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
              <option value='Urgent'>Urgent</option>
              required
            </select>
          </div>
          <label for='is_complete'>Task completed
            <input type='checkbox' id='checkbox' v-model='is_complete' />
          </label>
          <button class='transparent-btn bg-purple' @click.prevent='handleNewTask'>Add Task</button>
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
      priority: 'Low',
      description: '',
      completed: false,
      errorMessage: '',
      is_complete: false,
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['createTask']),
    async handleNewTask() {
      const newTask = {
        title: this.titleTask,
        user_id: this.user.id,
        priority: this.priority,
        description: this.description,
        is_complete: this.is_complete,
      };
      try {
        await this.createTask(newTask);
        this.$router.push({ path: '/' });
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
