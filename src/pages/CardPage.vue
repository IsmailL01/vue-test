<template>
  <div
    v-if="loading"
    style="display: flex; justify-content: center; align-items: flex-start"
  >
    <CardSkeleton />
  </div>
  <div style="display: flex; justify-content: center" v-else>
    <Card :isActiveLink="false" :card="card" />
  </div>
</template>
<script>
import Card from "@/entities/Card.vue";
import CardSkeleton from "@/entities/CardSkeleton.vue";
import { useCard } from "@/services/useCard";

export default {
  components: {
    Card,
    CardSkeleton,
  },
  setup() {
    const { card, loading } = useCard();
    return {
      card,
      loading,
    };
  },
};
</script>
<style></style>
