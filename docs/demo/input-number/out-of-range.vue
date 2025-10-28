<script setup lang="tsx">
import { Button, InputNumber, Space } from 'antd-v';
import { ref } from 'vue';

const value = ref<string | number | null>('99');

const reset = () => {
  value.value = 99;
};
</script>

<template>
  <Space>
    <InputNumber :min="1" :max="10" v-model:value="value" />
    <Button type="primary" @click="reset"> Reset </Button>
  </Space>
</template>
