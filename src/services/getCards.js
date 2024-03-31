import { axiosInstance } from "@/shared/config/axios/axiosInstance";

export async function useCard(id) {
  try {
    const response = await axiosInstance.get(`character/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
