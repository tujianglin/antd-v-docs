<script lang="tsx" setup>
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { Button, QRCode, Space } from 'antd-v';
import { ref } from 'vue';

const MIN_SIZE = 48;
const MAX_SIZE = 300;

const size = ref<number>(160);

const increase = () => {
  const newSize = size.value + 10;
  if (newSize >= MAX_SIZE) {
    return (size.value = MAX_SIZE);
  }
  size.value = newSize;
};

const decline = () => {
  const newSize = size.value - 10;
  if (newSize <= MIN_SIZE) {
    return (size.value = MIN_SIZE);
  }
  return (size.value = newSize);
};
</script>
<template>
  <Space.Compact class="mb-4">
    <Button @click="decline" :disabled="size <= MIN_SIZE" :icon="MinusOutlined"> Smaller </Button>
    <Button @click="increase" :disabled="size >= MAX_SIZE" :icon="PlusOutlined"> Larger </Button>
  </Space.Compact>
  <br />
  <br />
  <QRCode
    :size="size"
    :icon-size="size / 4"
    error-level="H"
    value="https://www.antdv.com"
    icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
  />
</template>
