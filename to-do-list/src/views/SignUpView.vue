<template>
  <div class='margin'>
    <div class='addtask-container purple-shadow centered-div'>
      <SignUp />
      <p>Already have an account?</p>
    <router-link class='transparent-btn centered-div' to="/auth/login">Log in</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignUp from '@/components/SignUp.vue';

export default {
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
    ...mapActions(userStore, ['signUp', 'signOut']),
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
  components: { SignUp },
};
</script>
