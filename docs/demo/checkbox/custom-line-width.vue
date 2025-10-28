<script setup lang="ts">
import { Checkbox, ConfigProvider } from 'antd-v';
</script>

<template>
  <ConfigProvider
    :theme="{
      components: {
        Checkbox: {
          lineWidth: 6,
        },
      },
    }"
  >
    <Checkbox :checked="true" />
    <Checkbox />
  </ConfigProvider>
  <Checkbox :checked="true" />
  <Checkbox />
</template>
