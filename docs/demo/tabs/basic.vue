<script lang="tsx" setup>
import type { TabsProps } from 'antd-v';
import { Tabs } from 'antd-v';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
</script>
<template>
  <Tabs active-key="1" :items="items" @change="onChange" />
</template>
