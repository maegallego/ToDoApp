<template>
    <nav>
        <span class='material-icons'> list_alt</span>
        <router-link to='/'>Home</router-link> |
        <router-link to='/new-task'>Add new task</router-link> |
        <Logout />
    </nav>
</template>

<script>
import Logout from './NavBarComponents/Logout.vue';

export default {
  components: { Logout },
};
</script>
