<script setup lang="tsx">
import { Mentions, Space } from 'antd-v';

const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
  {
    value: 'yesmeck',
    label: 'yesmeck',
  },
];
</script>

<template>
  <Space vertical>
    <Mentions value="@afc163" status="error" :options="options" />
    <Mentions value="@afc163" status="warning" :options="options" />
  </Space>
</template>
