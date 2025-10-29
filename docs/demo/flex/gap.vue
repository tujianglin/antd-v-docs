<script setup lang="ts">
import { Button, Flex, Radio, Slider } from 'antd-v';
import { ref } from 'vue';

type SizeType = 'small' | 'middle' | 'large' | undefined;

const gapSize = ref<SizeType | 'customize'>('small');

const customGapSize = ref<number>(0);
</script>

<template>
  <Flex gap="middle" vertical>
    <Radio.Group
      v-model:value="gapSize"
      :options="[
        { label: 'small', value: 'small' },
        { label: 'middle', value: 'middle' },
        { label: 'large', value: 'large' },
        { label: 'customize', value: 'customize' },
      ]"
    />
    <template v-if="gapSize === 'customize'">
      <Slider v-model:value="customGapSize" />
    </template>
    <Flex :gap="gapSize !== 'customize' ? gapSize : customGapSize">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Flex>
  </Flex>
</template>
