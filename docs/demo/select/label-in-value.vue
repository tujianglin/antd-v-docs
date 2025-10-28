<script setup lang="tsx">
import { Select } from 'antd-v';
</script>

<template>
  <Select
    label-in-value
    :value="{ value: 'lucy', label: 'Lucy (101)' }"
    style="width: 120px"
    :options="[
      {
        value: 'jack',
        label: 'Jack (100)',
      },
      {
        value: 'lucy',
        label: 'Lucy (101)',
      },
    ]"
  />
</template>
