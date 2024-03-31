<template>
  <div v-if="isLoading">Posts isLoading</div>
  <Container v-else>
    <div class="cards-container">
      <div v-for="card in cards" v-bind:key="card.id">
        <Card :isActiveLink="true" :card="card" />
      </div>
    </div>
  </Container>
</template>
<script>
import { useCards } from "../services/useCards";
import Card from "../entities/Card.vue";
import Container from "@/shared/lib/Container.vue";

export default {
  name: "cards-page",
  components: {
    Card,
    Container,
  },
  setup() {
    const { cards, isLoading } = useCards();

    return {
      cards,
      isLoading,
    };
  },
};
</script>
<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  background-color: rgb(39, 43, 51);
  padding: 120px 0;
}
</style>
