<template>
  <h1>Esta es la vista de edit</h1>
  <div v-if='task'>
    {{ task }}
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
  </div>
  <div>
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
          <option value='4' selected>Low</option>
          <option value='3'>Medium</option>
          <option value='2'>High</option>
          <option value='1'>Urgent</option>
        </select>
      </div>
      <div>
        <textarea
          v-model='description'
          placeholder='Llevar el DNI. Recoger carta.'
        >
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
      newTask: null,
      titleTask: '',
      priority: 0,
      description: '',
      completed: false,
    };
  },
  async created() {
    const id = this.$route.params.taskId;
    const {
      data: [currentTask],
    } = await supabase.from('tasks').select('*').match({ id });
    this.task = currentTask;
    this.newTask = this.task;
  },
  methods: {
    async handleUpdate() {
      if (this.titleTask) this.newTask.title = this.titleTask;
      if (this.priority) this.newTask.priority = this.priority;
      if (this.description) this.newTask.description = this.description;
      if (this.is_complete) this.newTask.is_complete = this.is_complete;
      await supabase
        .from('tasks')
        .update({ ...newTask })
        .match({ id });
    },
  },
};
</script>
