<template>
  <div class="w-full min-h-screen bg-gray-50">
    <div class="container w-full min-h-screen mx-auto flex flex-col justify-between">
      <header class="flex items-center justify-between py-4">
        <h1 class="text-lg font-bold">
          <NuxtLink :to="localePath('/')" class="hover:text-blue-600 hover:underline"> Logo </NuxtLink>
        </h1>
        <div class="space-x-2">
          <NuxtLink :to="localePath('/login')" class="hover:text-blue-600 hover:underline"> Login </NuxtLink>
          <NuxtLink :to="localePath('/register')" class="hover:text-blue-600 hover:underline"> Register </NuxtLink>
          <!-- i18n -->
          <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
            {{ locale.name }}
          </NuxtLink>
        </div>
      </header>

      <div class="flex-1"><slot /></div>

      <footer class="py-4">
        <div class="text-center">Nuxt 3 playground</div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>
