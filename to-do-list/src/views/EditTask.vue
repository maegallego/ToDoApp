<template>
  <div class='margin'>
    <div class='addtask-container purple-shadow centered-div'>
      <h1>Edit your task.</h1>
      <div v-if='task'>
        <form class='align-left'>
          <div>
            <label for='titleTask'
              >Title
              <input
                class='full-width form-input'
                name='titleTask'
                type='text'
                :placeholder='task.title'
                v-model='titleTask'
              />
            </label>
          </div>
          <div>
            Description
            <textarea
              class='full-width form-input'
              v-model='description'
              :placeholder='task.description'
            >
            </textarea>
          </div>
          <div>
            Select priority:
            <br />
            <select v-model='priority'>
              <option value='Low' selected>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
              <option value='Urgent'>Urgent</option>
            </select>
          </div>
          <label for='is_complete'
            >Task completed
            <input type='checkbox' id='checkbox' v-model='is_complete'
            true-value="true" false-value="false"/>
          </label>
          <div class='two-btn-right'>
            <router-link class='transparent-btn' to='/'
            >Cancel</router-link
            >
            <button
              class='transparent-btn bg-purple'
              @click.prevent='handleUpdate'
            >
              Update
            </button>
            {{errorMessage}}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import supabase from '../supabase';

export default {
  data() {
    return {
      task: null,
      titleTask: '',
      priority: '',
      description: '',
      is_complete: null,
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
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
