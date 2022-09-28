<template>
    <div>
        <h1>Sign Up</h1>
        <form class='align-left'  @submit.prevent='handleSignUp'>
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
            <div>
                <label for="confirmPassword">Confirm Password
                    <input id="confirmPassword" class='full-width form-input'
                    placeholder='Confirm Password'
                    type="password"
                    v-model="confirmPassword" />
                </label>
            </div>
            <button class='transparent-btn bg-purple' @click="handleSignUp">Sign Up</button>
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
    async handleSignUp() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords dont match';
        return;
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.signUp(userData.email, userData.password);
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
