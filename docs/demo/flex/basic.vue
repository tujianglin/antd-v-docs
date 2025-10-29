<script setup lang="tsx">
import { Flex, Radio } from 'antd-v';
import type { CSSProperties } from 'vue';
import { ref } from 'vue';
const value = ref('horizontal');
const baseStyle: CSSProperties = {
  width: '25%',
  height: '54px',
};
</script>

<template>
  <Flex gap="middle" vertical>
    <Radio.Group
      v-model:value="value"
      :options="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ]"
    />
    <Flex :vertical="value === 'vertical'">
      <div
        v-for="(item, index) in new Array(4)"
        :key="item"
        :style="{ ...baseStyle, background: `${index % 2 ? '#1677ff' : '#1677ffbf'}` }"
      ></div>
    </Flex>
  </Flex>
</template>
