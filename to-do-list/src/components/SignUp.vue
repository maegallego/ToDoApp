<template>
    <div>
        <h2>Sign Up</h2>
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
                    type="password"
                    v-model="confirmPassword" />
                </label>
            </div>
            <button @click="handleSignUp">Sign Up</button>
        </form>
        <div v-if="errorMessage">
          {{ errorMessage }}
        </div>
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
      errorMessage: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords dont match';
        return;
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      try {
        this.signUp(userData.email, userData.password);
      } catch (error) {
        this.errorMessage = 'No se ha podido hacer log in.';
        console.log(error.message);
      }
    },
  },
};
</script>
