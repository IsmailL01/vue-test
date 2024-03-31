<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
#app {
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}
</style>
