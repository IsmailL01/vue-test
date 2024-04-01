<template>
  <div>
    <Container style="position: relative" v-if="isLoading">
      <div
        style="
          height: 100px;
          width: 100px;
          position: absolute;
          top: 0;
          left: calc(50% - 50px);
        "
      >
        <Loader />
      </div>

      <div class="cards-container">
        <div v-for="card in cards" v-bind:key="card.id">
          <CardSkeleton />
        </div>
      </div>
    </Container>

    <div class="cards-content" v-else>
      <div class="search-block">
        <CardsPageHeader
          v-model:select="selectedSort"
          v-model:input="inputSearch"
        />
      </div>
      <Container>
        <div class="cards-container">
          <div v-for="card in sortedCards" v-bind:key="card.id">
            <TransitionGroup name="card-list" key="card.id">
              <Card :isActiveLink="true" :card="card" v-bind:key="card.id" />
            </TransitionGroup>
          </div>
          <h2 style="color: #fff">{{ cardMessage }}</h2>
        </div>
      </Container>
    </div>
    <CardsPageFooter
      @chooseCurrentPage="chooseCurrentPage"
      v-model:page="page"
    />
  </div>
</template>
<script>
import { useCards } from "../services/useCards";
import Card from "../entities/Card.vue";
import Container from "@/shared/lib/Container.vue";
import Loader from "@/shared/ui/Loader.vue";
import CardSkeleton from "../entities/CardSkeleton.vue";
import filterBySelected from "@/entities/lib/filterBySelected";
import { filterCards } from "@/entities/lib/filterCards";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import CardsPageHeader from "./components/CardsPageHeader.vue";
import CardsPageFooter from "./components/CardsPageFooter.vue";

export default {
  name: "cards-page",
  components: {
    Card,
    Container,
    Loader,
    CardSkeleton,
    CardsPageHeader,
    CardsPageFooter,
  },

  setup() {
    const page = ref(1);
    const router = useRouter();

    const chooseCurrentPage = (n) => {
      page.value = n;
      router.push({ path: "/cards", query: { page: page.value } });
    };

    const { cards, isLoading } = useCards(10, page);

    const { filteredBySearch, inputSearch } = filterCards(cards);
    const { selectedSort, sortedCards } = filterBySelected(filteredBySearch);
    const cardMessage = ref("");

    watch(filteredBySearch, () => {
      if (filteredBySearch.value.length === 0) {
        cardMessage.value = "Ничего не найдено";
      } else {
        cardMessage.value = "";
      }
    });

    return {
      isLoading,
      inputSearch,
      filteredBySearch,
      cards,
      cardMessage,
      selectedSort,
      sortedCards,
      page,
      chooseCurrentPage,
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
  height: calc(100% - 230px);
  width: 100vw;
}

.cards-content {
  margin-bottom: 50px;
}

.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.5s ease;
}
.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.card-list-move {
  transition: transform 0.5s ease;
}

.search-block {
  width: 100%;
  height: 80px;
  background-color: rgb(124, 121, 121);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
