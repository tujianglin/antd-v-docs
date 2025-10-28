<script setup lang="tsx">
import { ConfigProvider, Radio } from 'antd-v';

const RadioGroup = Radio.Group;

const options = [
  { value: 1, label: 'A' },
  { value: 2, label: 'B' },
  { value: 3, label: 'C' },
  { value: 4, label: 'D' },
];
</script>

<template>
  <ConfigProvider :theme="{ token: { wireframe: true } }">
    <RadioGroup :value="1" :options="options" />
    <br />
    <RadioGroup :value="1" :options="options" disabled />
  </ConfigProvider>
</template>
