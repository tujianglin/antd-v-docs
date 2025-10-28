<script setup lang="tsx">
import { AutoComplete, Flex, Select } from 'antd-v';
import type { SizeType } from 'node_modules/antd-v/dist/components/config-provider/SizeContext';
import { ref } from 'vue';

const sizes = ['small', 'middle', 'large'] as SizeType[];
const selectValue = ref('centered');
const autoCompleteValue = ref('centered');
</script>

<template>
  <Flex vertical :gap="16">
    <Flex v-for="size in sizes" :key="size">
      <Select v-model:value="selectValue" :size="size" :style="{ width: '200px' }" :show-search="{ searchValue: 'centered' }" />
      <AutoComplete v-model:value="autoCompleteValue" :size="size" :style="{ width: 200 }" />
    </Flex>
  </Flex>
</template>
