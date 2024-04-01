import { ref, computed } from "vue";

export default function filterBySelected(cards) {
  const selectedSort = ref("");

  const sortedCards = computed(() => {
    return [...cards.value].sort((post1, post2) => {
      return post1[selectedSort.value]?.localeCompare(
        post2[selectedSort.value]
      );
    });
  });

  return {
    selectedSort,
    sortedCards,
  };
}
