<template>
  <input :value="modelValue" @input="updateValue" type="text" />
</template>
<script>
export default {
  name: "ui-input",

  props: {
    modelValue: {
      type: String,
    },
  },

  setup(props, { emit }) {
    const updateValue = (e) => {
      emit("update:modelValue", e.target.value);
    };
    return {
      updateValue,
    };
  },
};
</script>
<style lang=""></style>
