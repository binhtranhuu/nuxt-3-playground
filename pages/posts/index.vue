<template>
  <div class="grid grid-cols-12 gap-3">
      <div v-if="pending">Loading...</div>
      <div v-if="error">Oop! Error...</div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-span-3 bg-white p-2 rounded-lg shadow"
      >
        <h3 class="text-lg font-medium truncate">
          <NuxtLink
            :to="`/posts/${post.id}`"
            class="hover:text-blue-600 hover:underline"
          >
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="text-base line-clamp-3">{{ post.body }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { PostDetail } from "@/types";

useSeoMeta({
  title: "Posts screen",
  description: "This is the Posts screen",
});

const {
  data: posts,
  pending,
  error,
} = await useAsyncData<PostDetail[]>("users", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts")
);
</script>
