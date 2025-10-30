<script lang="tsx" setup>
import { Tabs } from 'antd-v';

const items = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab ${id}`,
    key: id,
    children: `Content of Tab Pane ${id}`,
  };
});
</script>
<template>
  <Tabs active-key="1" centered :items="items" />
</template>
