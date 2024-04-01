import { ref, onMounted, watch } from "vue";
import { axiosInstance } from "@/shared/config/axios/axiosInstance";

export function useCards(limit, currentPage) {
  const cards = ref([]);
  const isLoading = ref(false);

  const fetching = async () => {
    try {
      isLoading.value = true;

      const response = await axiosInstance.get("character", {
        params: {
          page: currentPage.value,
        },
      });

      cards.value = response.data.results;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  watch(currentPage, () => fetching());
  onMounted(fetching);
  return {
    cards,
    isLoading,
  };
}
