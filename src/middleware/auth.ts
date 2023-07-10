import { useAuthStore } from "@/store";
import { storeToRefs } from "pinia";
import { UserInfo } from "types";

export default defineNuxtRouteMiddleware(async () => {
  const app = useNuxtApp();
  const authStore = useAuthStore(app.$pinia);
  const { updateUserInfo } = authStore;
  const { userInfo } = storeToRefs(authStore);

  if (!userInfo.value) {
    const { data: user } = await useFetch<UserInfo>(
      `https://jsonplaceholder.typicode.com/users/1`
    );

    updateUserInfo(user as unknown as UserInfo);
  }
});
