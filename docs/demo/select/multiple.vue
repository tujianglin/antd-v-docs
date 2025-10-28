<script setup lang="tsx">
import { Select, Space } from 'antd-v';

const options: any[] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
</script>

<template>
  <Space style="width: 100%" vertical>
    <Select
      mode="multiple"
      allow-clear
      style="width: 100%"
      placeholder="Please select"
      :value="['a10', 'c12']"
      :options="options"
    />
    <Select mode="multiple" disabled style="width: 100%" placeholder="Please select" :value="['a10', 'c12']" :options="options" />
  </Space>
</template>
