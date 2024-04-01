<template lang="html">
  <div class="card-container">
    <div>
      <img class="card-image" v-bind:src="card.image" />
    </div>
    <div class="card-content">
      <div class="card-content__item">
        <RouterLink v-if="isActiveLink" :to="to">
          <h3 style="font-size: 27px">{{ card.name }}</h3>
        </RouterLink>
        <span v-else>
          <h3 style="font-size: 27px">{{ card.name }}</h3>
        </span>
        <span class="status">
          <span :style="{ backgroundColor: color }" class="status-icon"></span>
          {{ card.status }} - {{ card.species }}
        </span>
      </div>
      <div class="card-content__item">
        <span style="font-size: 16px">Last known location:</span>
        <RouterLink v-if="isActiveLink" style="font-size: 16px" :to="to">{{
          card.location.name
        }}</RouterLink>
        <span v-else>
          {{ card.location.name }}
        </span>
      </div>
      <div class="card-content__item">
        <span>First seen in: </span>
        <RouterLink v-if="isActiveLink" :to="to">{{ card.name }}</RouterLink>
        <span v-else>
          {{ card.name }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { getStatusColor } from "@/shared/lib/getStatusColor";
export default {
  name: "item-card",
  props: {
    card: {
      type: Object,
      required: true,
    },
    isActiveLink: {
      type: Boolean,
      required: false,
    },
  },

  setup(props) {
    const to = "item/" + String(props.card.id);
    const color = getStatusColor(props.card.status);
    return {
      to,
      color,
    };
  },
};
</script>
<style lang="css" scoped>
.card-container {
  display: flex;
  width: 600px;
  min-height: 220px;
  color: rgb(245, 245, 245);
  background-color: rgb(70, 70, 70);
}
.card-content__item {
  margin-left: 8px;
}
.card-content {
  display: flex;
  flex-direction: column;

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
  max-width: 220px;
  max-height: 220px;
}
</style>
