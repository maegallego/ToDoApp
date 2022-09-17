<template>
  <div class='home'>
    <h1>vista home</h1>
    <CreateTask />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import CreateTask from '@/components/CreateTask.vue';

export default {
  name: 'HomeView',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
  created() {
    this.fetchTasks();
  },
  components: { CreateTask },
};
</script>
