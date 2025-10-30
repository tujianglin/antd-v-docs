<script lang="tsx" setup>
import { Watermark } from 'antd-v';
import {} from 'vue';
</script>
<template>
  <Watermark
    :height="30"
    :width="130"
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div :style="{ height: '500px' }"></div>
  </Watermark>
</template>
