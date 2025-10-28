<script setup lang="tsx">
import { ColorPicker } from 'antd-v';
import { ref } from 'vue';

const color = ref('#1677ff');
</script>

<template>
  <ColorPicker v-model:value="color" allow-clear />
</template>
