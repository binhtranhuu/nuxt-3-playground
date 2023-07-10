<template>
  <div class="grid grid-cols-12 gap-3">
    <div v-if="pending">Loading...</div>
    <div v-if="error">Oop! Error...</div>
    <div v-for="user in users" :key="user.id" class="col-span-3 bg-white p-2 rounded-lg shadow">
      <h3 class="text-lg font-medium space-x-1 truncate">
        <span>Name:</span>
        <NuxtLink :to="`users/${user.id}`" class="hover:text-blue-600 hover:underline">
          {{ user.name }}
        </NuxtLink>
      </h3>
      <h4 class="text-base font-medium truncate">Username: {{ user.name }}</h4>
      <p class="text-sm line-clamp-3">Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserInfo } from 'types';

useSeoMeta({
  title: 'Users screen',
  description: 'This is the Users screen',
});

const {
  data: users,
  pending,
  error,
} = await useAsyncData<UserInfo[]>('users', () => $fetch('https://jsonplaceholder.typicode.com/users'));
</script>
