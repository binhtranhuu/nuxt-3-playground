<template>
  <div>
    <div>
      appConfig:
      <pre>{{ JSON.stringify(appConfig, null, 2) }}</pre>
    </div>
    <div>
      runtimeConfig:
      <pre>{{ JSON.stringify(runtimeConfig, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();
</script>
