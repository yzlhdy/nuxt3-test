<template>
  <div class="container mx-auto">
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <nuxt-link to="/naive">
        <n-button type="primary">Naive UI</n-button>
      </nuxt-link>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error1 </n-button>
      <!-- <h1>Color mode: {{ $colorMode?.value }}</h1> -->
      <n-popselect
        v-model:value="$colorMode.preference"
        :options="options"
        trigger="click"
        @update-value="handleUpdate"
      >
        <n-button>{{ value || "弹出选择" }}</n-button>
      </n-popselect>
      <nuxt-link to="/about">About</nuxt-link>
    </n-space>
    <div class="w-[500px] p-c p-4 rounded-xl shadow flex flex-col space-y-5">
      <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="基本的 Textarea"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const { colorModePreference } = useNaiveColorMode();

const value = ref("");
const options = [
  {
    label: "system",
    value: "system",
  },
  {
    label: "light",
    value: "light",
  },
  {
    label: "dark",
    value: "dark",
  },
];
const handleUpdate = (value: any) => {
  console.log(value);
  window.localStorage.setItem("nuxt-color-mode", value);
  colorModePreference.set(value);
  //   colorMode.value = value;
};
// console.log(value);
</script>

<style scoped></style>
