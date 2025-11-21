<script lang="tsx" setup>
import { Flex, InputNumber } from 'antd-v';
import { ref } from 'vue';

const sharedProps = {
  mode: 'spinner' as const,
  min: 1,
  max: 10,
  style: { width: '150px' },
};

const value = ref(3);
</script>
<template>
  <Flex orientation="vertical" gap="middle">
    <InputNumber v-model:value="value" v-bind="sharedProps" placeholder="Outlined" />
    <InputNumber v-model:value="value" v-bind="sharedProps" variant="filled" placeholder="Filled" />
  </Flex>
</template>
