<template>
  <div>
    <div class="task-priority" :class="taskProp.priority.toLowerCase()">
      {{taskProp.priority}}
    </div>
    <div class="task-container task-structure bg-light-grey purple-shadow">
      <div class="task-complete">
        <div v-if='taskProp.is_complete'>
          <span class='material-icons'>check_box</span>
        </div>
        <div v-if='!taskProp.is_complete'>
          <span class='material-icons'><span class="material-symbols-outlined">
check_box_outline_blank
</span></span>
        </div>
      </div>
      <div class="task-text">
        <p class="low-opacity small-text">
          Added on {{ taskProp.inserted_at.slice(0,10)}}
        </p>
        <p class="task-title">{{ taskProp.title }}</p>
        <p>{{ taskProp.description }}</p>
      </div>
      <div class="task-buttons">
        <button class="material-icons icon-btn bg-purple" @click='handleDelete(taskProp.id, index)'>
          delete
        </button>
        <router-link
        class="material-icons icon-btn bg-purple align-pencil-btn" :to="`/edit/${taskProp.id}`">
          edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  props: {
    taskProp: Object,
  },
  methods: {
    ...mapActions(taskStore, ['deleteTask', 'getTaskById']),
    handleDelete(id, index) {
      this.deleteTask(id, index);
    },
  },
};
</script>
