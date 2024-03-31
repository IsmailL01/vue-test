<template lang="">
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "page-container",
};
</script>
<style scoped lang="css">
.container {
  display: flex;
  align-items: center;
}
</style>
