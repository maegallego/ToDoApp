<template>
  <div class='margin'>
    <div class='addtask-container purple-shadow centered-div'>
      <SignIn />
    <p>Don't have an account?</p>
    <router-link class='transparent-btn centered-div' to="/auth/sign-up">Register</router-link>
    </div>
  </div>
</template>

<script>
import SignIn from '@/components/SignIn.vue';
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
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
    ...mapActions(userStore, ['signIn']),
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push({ path: '/' });
      }
    },
  },
  components: { SignIn },
};
</script>
