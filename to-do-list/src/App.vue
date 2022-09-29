<template>
  <NavBar />
  <router-view />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
  },
  async created() {
    try {
      await this.fetchUser();
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      } else {
        this.$router.push({ path: '/' });
      }
    } catch (e) {
      console.error(e);
    }
  },
  components: { NavBar },
};

</script>

<style>
@import '@/assets/styles.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #e5e8f8;
}

nav a {
  font-weight: bold;
  color: #363c5d;
  text-decoration:none;
}

nav a.router-link-exact-active {
  color: #857bcd;
}
</style>
