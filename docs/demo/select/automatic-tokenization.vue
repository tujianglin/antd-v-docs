<script setup lang="tsx">
import { Select } from 'antd-v';

const options: any[] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
</script>

<template>
  <Select mode="tags" style="width: 100%" :token-separators="[',']" :options="options" />
</template>
