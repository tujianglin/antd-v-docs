<script lang="tsx" setup>
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons-vue';
import { Tabs } from 'antd-v';

const items = [AppleOutlined, AndroidOutlined].map((Icon, i) => {
  const id = String(i + 1);
  return {
    key: id,
    label: `Tab ${id}`,
    children: `Tab ${id}`,
    icon: <Icon />,
  };
});
</script>
<template>
  <Tabs active-key="2" :items="items" />
</template>
