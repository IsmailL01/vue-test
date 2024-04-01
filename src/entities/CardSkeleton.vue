<template lang="html">
  <div class="card-container">
    <div class="card-image">
      <Skeleton :width="220" :height="220" />
    </div>
    <div class="card-content">
      <div>
        <Skeleton
          style="background-color: rgb(193, 106, 106)"
          width="220"
          height="30"
          borderRadius="5"
        />
      </div>
      <div>
        <Skeleton class="status-icon" width="9" height="9" borderRadius="50" />
      </div>
      <div>
        <Skeleton
          style="background-color: rgb(193, 106, 106)"
          width="220"
          height="20"
          borderRadius="5"
        />
      </div>
      <div>
        <Skeleton
          style="background-color: rgb(193, 106, 106)"
          :width="220"
          height="20"
          borderRadius="5"
        />
      </div>
      <div>
        <Skeleton
          style="background-color: rgb(193, 106, 106)"
          :width="220"
          height="30"
          borderRadius="5"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Skeleton from "@/shared/ui/Skeleton.vue";

export default {
  name: "item-card",
  components: {
    Skeleton,
  },
};
</script>
<style lang="css" scoped>
.card-container {
  display: flex;
  min-width: 600px;
  min-height: 220px;
  color: rgb(245, 245, 245);
  background-color: rgb(70, 70, 70);
}

.card-content {
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  justify-content: space-around;
}

.card-content__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.status {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.status-icon {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: rgb(158, 158, 158);
}
.card-image {
  border: 2px solid #fff;
}
</style>
