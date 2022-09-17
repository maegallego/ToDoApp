<template>
    <button v-if="user != null" @click="handleSignOut">
        Log out
    </button>
    <a v-if="user === null" href="/login">
        Sign In
    </a>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignOut',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    handleSignOut() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signOut(userData.email, userData.password);
    },
  },
};
</script>
