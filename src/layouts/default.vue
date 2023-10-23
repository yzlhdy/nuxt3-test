<template>
  <naive-config :theme-config="themeConfig">
    <div>
      默认
      <slot />
    </div>
  </naive-config>
</template>
<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui";
const themeConfig: ThemeConfig = {
  shared: {
    common: {
      primaryColor: "red",
      successColor: "green",
    },
    Input: {
      borderRadius: "6px",
    },
  },
};
</script>
