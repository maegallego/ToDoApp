<template>
  <h1>Esta es la vista de sign up.</h1>
  <form @submit.prevent="handleSignUp">
    <div>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" v-model="password" />
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signOut', 'signIn']),
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        console.log('Passwords dont match');
        return;
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signIn(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
