<script setup lang="ts">
import { Button, Flex, Segmented, type FlexProps } from 'antd-v';
import type { CSSProperties } from 'vue';
import { reactive, ref } from 'vue';
const justifyOptions = reactive<FlexProps['justify'][]>([
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
]);

const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end']);
const justify = ref(justifyOptions[0]);
const alignItems = ref(alignOptions[0]);
const boxStyle: CSSProperties = {
  width: '100%',
  height: '120px',
  borderRadius: '6px',
  border: '1px solid #40a9ff',
};
</script>

<template>
  <Flex gap="middle" align="start" vertical>
    <p>Select justify :</p>
    <Segmented v-model:value="justify" :options="justifyOptions" />
    <p>Select align :</p>
    <Segmented v-model:value="alignItems" :options="alignOptions" />
    <Flex :style="{ ...boxStyle }" :justify="justify" :align="alignItems">
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
    </Flex>
  </Flex>
</template>
