<template>
  <div
    :style="{
      width: styles.width + 'px',
      height: styles.height + 'px',
      borderRadius: styles.borderRadius && styles.borderRadius + '%',
    }"
    class="Skeleton"
  ></div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "ui-skeleton",
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    borderRadius: {
      type: Number,
    },
  },
  setup(props) {
    const styles = ref({
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
    });
    return {
      styles,
    };
  },
};
</script>
<style lang="scss">
.Skeleton {
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 var(--skeleton-shadow);

  &::before {
    position: absolute;
    top: 0;
    left: -150px;
    display: block;
    width: 80%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--skeleton-color) 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    content: "";
  }
}

@keyframes load {
  from {
    left: -150px;
  }

  to {
    left: 100%;
  }
}
</style>
