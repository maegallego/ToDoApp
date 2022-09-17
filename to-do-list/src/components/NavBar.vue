<template>
    <nav>
        <router-link to='/'>Home</router-link> |
        <Logout />
    </nav>
</template>

<script>
import Logout from './NavBarComponents/Logout.vue';

export default {
  components: { Logout },
};
</script>
