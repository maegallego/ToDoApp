<template>
    <SignIn />
    <p>Don't have an account?</p>
    <router-link to="/auth/sign-up">Register</router-link>
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
      confirmPassword: '',
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
