<template>
  <div
    v-if="loading"
    style="display: flex; justify-content: center; align-items: flex-start"
  >
    Card isLoading
  </div>
  <div style="display: flex; justify-content: center" v-else>
    <Card :isActiveLink="false" :card="card" />
  </div>
</template>
<script>
import Card from "@/entities/Card.vue";
import { useCard } from "@/services/useCard";

export default {
  components: {
    Card,
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
