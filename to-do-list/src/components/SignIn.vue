<template>
    <div>
        <h2>Already have an account?</h2>
        <form @submit.prevent='handleSignIn'>
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
            <button @click="handleSignIn">Sign In</button>
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
    handleSignIn() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      try {
        this.signIn(userData.email, userData.password);
      } catch (error) {
        this.errorMessage = 'Could not log in.';
        console.log(error.message);
      }
    },
  },
};
</script>
