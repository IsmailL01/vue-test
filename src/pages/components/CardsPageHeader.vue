<template>
  <div class="filters-container">
    <Select class="select" v-model="selectedSort" :options="options" />
    <Input placeholder="Search" class="input" v-model="inputSearch" />
  </div>
</template>
<script setup>
import Input from "@/shared/ui/Input.vue";
import Select from "@/shared/ui/Select.vue";
import { defineModel } from "vue";

const selectedSort = defineModel("select");
const inputSearch = defineModel("input");
const options = [
  {
    value: "status",
    name: "По статусу",
  },
  {
    value: "name",
    name: "По имени",
  },
];
</script>
<style scoped>
.filters-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.select {
  border-radius: 20px;
}

.input {
  width: 150px;
  height: 30px;
  border-radius: 20px;
}
</style>
