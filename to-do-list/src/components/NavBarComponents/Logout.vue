<template>
    <button v-if="user != null" @click="handleSignOut">
        Log out
    </button>
    <router-link v-if="user === null" to='/auth/login'>
        Sign In
    </router-link>
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
      this.signOut();
      this.$router.push({ path: '/logout-ok' });
    },
  },
};
</script>
