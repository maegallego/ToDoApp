<template>
  <h1>Esta es la vista de edit</h1>
  <div v-if='task'>
    <form>
      <div>
        <label for='titleTask'
          >Task
          <input
            name='titleTask'
            type='text'
            :placeholder='task.title'
            v-model='titleTask'
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
        </select>
      </div>
      <div>
        <textarea v-model='description' :placeholder='task.description'>
        </textarea>
      </div>
      <label for='is_complete'
        >Task completed
        <input type='checkbox' id='checkbox' v-model='is_complete' />
      </label>
      <router-link to='/'>Cancel</router-link>
      <button @click.prevent='handleUpdate'>Update</button>
    </form>
  </div>
</template>

<script>
import supabase from '../supabase';

export default {
  data() {
    return {
      task: null,
      titleTask: '',
      priority: 4,
      description: '',
      completed: false,
      id: null,
    };
  },
  async created() {
    this.id = this.$route.params.taskId;
    const {
      data: [currentTask],
    } = await supabase.from('tasks').select('*').match({ id: this.id });
    this.task = currentTask;
  },
  methods: {
    async handleUpdate() {
      try {
        if (this.titleTask) this.task.title = this.titleTask;
        if (this.priority) this.task.priority = this.priority;
        if (this.description) this.task.description = this.description;
        if (this.is_complete) this.task.is_complete = this.is_complete;
        await supabase
          .from('tasks')
          .update({ ...this.task })
          .match({ id: this.id });
        this.$router.push({ path: `/#${this.task.id}` });
      } catch (error) {
        this.errorMessage = 'Could not register new user.';
        console.log(error.message);
      }
    },
  },
};
</script>
