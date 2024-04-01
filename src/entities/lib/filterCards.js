import { ref, computed } from "vue";

export const filterCards = (cards) => {
  const inputSearch = ref("");

  const filteredBySearch = computed(() =>
    cards.value.filter((card) => {
      return card.name.toLowerCase().includes(inputSearch.value.toLowerCase());
    })
  );

  return {
    filteredBySearch,
    inputSearch,
  };
};
