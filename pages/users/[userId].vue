<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Oop! Error...</div>
  <div v-else class="space-y-2">
    <h3 class="text-lg font-medium truncate">Name: {{ user?.name }}</h3>
    <h4 class="text-base font-medium truncate">Username: {{ user?.name }}</h4>
    <p class="text-sm line-clamp-3">Email: {{ user?.email }}</p>
  </div>
</template>

<script setup lang="ts">
import { UserInfo } from "types";

const {
  params: { userId },
} = useRoute();

const {
  data: user,
  pending,
  error,
} = await useFetch<UserInfo>(
  `https://jsonplaceholder.typicode.com/users/${userId}`
);
</script>
