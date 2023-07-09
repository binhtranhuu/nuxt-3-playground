<template>
  <div
    class="container mx-auto bg-gray-50 w-full flex flex-col justify-between min-h-screen"
  >
    <header class="flex items-center justify-between py-4">
      <h1 class="text-lg font-bold">
        <NuxtLink to="/" class="hover:text-blue-600 hover:underline">
          Logo
        </NuxtLink>
      </h1>
      <div class="space-x-2">
        <NuxtLink to="/login" class="hover:text-blue-600 hover:underline">
          Login
        </NuxtLink>
        <NuxtLink to="/register" class="hover:text-blue-600 hover:underline">
          Register
        </NuxtLink>
      </div>
    </header>

    <div class="flex-1"><slot /></div>

    <footer class="py-4">
      <div class="text-center">Nuxt 3 playground</div>
    </footer>
  </div>
</template>

<script setup></script>
