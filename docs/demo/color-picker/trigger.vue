<script setup lang="tsx">
import { Button, ColorPicker } from 'antd-v';
import { computed, ref } from 'vue';

const color = ref<any>('#1677ff');

const bgColor = computed(() => (typeof color.value === 'string' ? color.value : color.value?.toHexString()));

const setColor = (val: any) => {
  color.value = val;
};
</script>

<template>
  <ColorPicker v-model:value="color" @change="setColor">
    <Button type="primary" :style="{ backgroundColor: bgColor }"> open </Button>
  </ColorPicker>
</template>
