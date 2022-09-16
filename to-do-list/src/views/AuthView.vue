<template>
    <div>
        <h1>Esta es la vista de sign up.</h1>
        <form @submit.prevent='handleSignUp'>
            <div>
                <label for='email'>Email
                    <input id='email'
                    type='email'
                    placeholder='email'
                    v-model='email'
                    />
                </label>
            </div>
            <div>
                <label for='password'>Password
                    <input id='password'
                    placeholder='password'
                    type='password'
                    v-model='password'
                    />
                </label>
            </div>
            <div>
                <label for="confirmPassword">Confirm Password
                    <input id="confirmPassword"
                    placeholder='Confirm Password'
                    type="confirmPassword"
                    v-model="confirmPassword" />
                </label>
            </div>
            <button @click="handleSignUp">Sign Up</button>
            <button @click="handleSignIn">Sign In</button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView.vue',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
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
