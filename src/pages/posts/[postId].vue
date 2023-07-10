<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Oop! Error...</div>
  <div v-else class="space-y-2">
    <h3 class="text-lg font-medium truncate">{{ post?.title }}</h3>
    <p class="text-base line-clamp-3">{{ post?.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { PostDetail } from "types";

const {
  params: { postId },
} = useRoute();

const {
  data: post,
  pending,
  error,
} = await useFetch<PostDetail>(
  `https://jsonplaceholder.typicode.com/posts/${postId}`
);

useSeoMeta({
  title: post.value?.title || "Post detail screen",
  description: post.value?.body || "This is the Post detail screen",
});
</script>
