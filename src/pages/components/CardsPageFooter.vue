<template>
  <div class="pages-container">
    <div
      @click="$emit('chooseCurrentPage', n)"
      class="pages-item"
      :class="{ active: n == page }"
      v-for="n in 10"
      v-bind:key="n"
    >
      {{ n }}
    </div>
  </div>
</template>
<script setup>
import { defineModel } from "vue";
const page = defineModel("page");
</script>
<style>
.pages-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  width: 100%;
}
.pages-item {
  border-radius: 10px;
  border: 1px solid teal;
  cursor: pointer;
  font-size: 20px;
}
.active {
  border: 1px solid rgb(255, 0, 0);
}
</style>
