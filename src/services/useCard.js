import { axiosInstance } from "@/shared/config/axios/axiosInstance";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

export function useCard() {
  const card = ref(null);
  const loading = ref(false);
  const { params } = useRoute();
  const fetchData = async () => {
    try {
      loading.value = true;

      const response = await axiosInstance.get(`character/${params.id}`);

      card.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  onBeforeMount(fetchData);

  return {
    card,
    loading,
  };
}
