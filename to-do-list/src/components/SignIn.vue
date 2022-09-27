<template>
  <div>
      <h1>Already have an account?</h1>
      <form class='align-left' @submit.prevent='handleSignIn'>
          <div>
              <label for='email'>Email
                  <input id='email' class='full-width form-input'
                  type='email'
                  placeholder='Email'
                  v-model='email'
                  />
              </label>
          </div>
          <div>
              <label for='password'>Password
                  <input id='password' class='full-width form-input'
                  placeholder='Password'
                  type='password'
                  v-model='password'
                  />
              </label>
          </div>
          <button class='transparent-btn bg-purple'
          @click="handleSignIn">Sign In</button>
      </form>
  </div>
  <div v-if="errorMessage">
        {{ errorMessage }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    async handleSignIn() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.signIn(userData.email, userData.password);
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
