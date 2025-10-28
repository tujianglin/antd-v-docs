<script setup lang="tsx">
import { Select } from 'antd-v';

const onSearch = (value: string) => {
  console.log('search:', value);
};
</script>

<template>
  <Select
    :show-search="{ optionFilterProp: 'label', onSearch }"
    placeholder="Select a person"
    :options="[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]"
  />
</template>
