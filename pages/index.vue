<template>
  <div class="flex items-center justify-center gap-2">
    <NuxtLink
      :to="localePath('/posts')"
      class="max-w-md bg-white px-4 py-2 rounded-lg shadow"
    >
      Posts
    </NuxtLink>
    <NuxtLink
      :to="localePath('/users')"
      class="max-w-md bg-white px-4 py-2 rounded-lg shadow"
    >
      Users
    </NuxtLink>
  </div>

  <div class="text-center">
    <p class="text-base font-medium">{{ $t("name") }}</p>
  </div>

  <div>
    filtersList: {{ filtersList }}
    <div>
      <input v-model="inputVal" />
      <button @click="addValueToFilterList(inputVal)">+</button>
    </div>
  </div>
</template>

<script setup>
import { useFiltersStore } from "@/store";
import { storeToRefs } from "pinia";

const localePath = useLocalePath();

const inputVal = ref("");
const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);
</script>
