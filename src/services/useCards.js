import { ref, onMounted } from "vue";
import { axiosInstance } from "@/shared/config/axios/axiosInstance";

export function useCards() {
  const cards = ref([]);
  const isLoading = ref(false);
  const fetching = async () => {
    try {
      isLoading.value = true;

      const response = await axiosInstance.get("character");

      cards.value = response.data.results;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);
  return {
    cards,
    isLoading,
  };
}
