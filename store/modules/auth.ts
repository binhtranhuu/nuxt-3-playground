import { defineStore } from "pinia";
import { UserInfo } from "types";

export const useAuthStore = defineStore("auth-store", () => {
  const userInfo = ref<UserInfo>();

  const updateUserInfo = (val: UserInfo) => {
    userInfo.value = val;
  };

  return { userInfo, updateUserInfo };
});
