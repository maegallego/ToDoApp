import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    onlyCompleted() {
      return this.tasks.filter((task) => task.is_complete);
    },
  },
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async createTask(task) {
      const { data, error } = await supabase
        .from('tasks')
        .insert(task);
      if (error) throw error;
      else this.tasks.push(data[0]);
    },
    async deleteTask(id, taskIndex) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .match({ id });
      if (error) throw error;
      this.tasks.splice(taskIndex, 1);
    },
  },
});
