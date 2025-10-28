<script setup lang="tsx">
import { Select, Typography } from 'antd-v';

const { Title } = Typography;

const options: any[] = [];

for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}
</script>

<template>
  <div>
    <Title :level="4">{{ options.length }} Items</Title>
    <Select mode="multiple" style="width: 100%" placeholder="Please select" :value="['a10', 'c12']" :options="options" />
  </div>
</template>
