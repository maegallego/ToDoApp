<template>
    <h1>AUTH</h1>
    <router-view />
</template>

<script>
export default ({
  created() {
    this.$router.push({ path: '/auth/login' });
  },
});

</script>
