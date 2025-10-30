<script lang="tsx" setup>
import type { TabsProps } from 'antd-v';
import { Segmented, Tabs } from 'antd-v';
import { ref } from 'vue';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
];

type Align = 'start' | 'center' | 'end';

const alignValue = ref<Align>('center');
</script>
<template>
  <Segmented v-model:value="alignValue" class="!mb-2" :options="['start', 'center', 'end']" />
  <Tabs
    active-key="1"
    :items="items"
    @change="onChange"
    :indicator="{
      size: (origin) => origin - 20,
      align: alignValue,
    }"
  />
</template>
