<template>
  <div>
    <NuxtImg src="exacta-trade-loading.png"></NuxtImg>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "custom",
});

useHead({
  title: "About",
  meta: [
    {
      name: "description",
      content: "About page",
    },
  ],
});
</script>

<style scoped></style>
