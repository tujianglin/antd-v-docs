<script setup lang="tsx">
import { Select } from 'antd-v';
</script>

<template>
  <Select
    :show-search="{
      optionFilterProp: 'label',
      filterSort: (optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
    }"
    style="width: 200px"
    placeholder="Search to Select"
    :options="[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]"
  />
</template>
