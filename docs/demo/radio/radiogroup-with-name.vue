<script setup lang="tsx">
import { Radio } from 'antd-v';

const RadioGroup = Radio.Group;
</script>

<template>
  <RadioGroup
    name="radiogroup"
    :value="1"
    :options="[
      { value: 1, label: 'A' },
      { value: 2, label: 'B' },
      { value: 3, label: 'C' },
      { value: 4, label: 'D' },
    ]"
  />
</template>
