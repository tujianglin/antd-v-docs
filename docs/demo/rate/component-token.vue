<script setup lang="ts">
import { ConfigProvider, Rate } from 'antd-v';
</script>

<template>
  <ConfigProvider
    :theme="{
      components: {
        Rate: {
          starColor: 'blue',
          starSize: 40,
          starHoverScale: 'scale(2)',
          starBg: 'red',
        },
      },
    }"
  >
    <Rate :value="2.5" />
  </ConfigProvider>
</template>
