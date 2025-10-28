<script setup lang="tsx">
import { AutoComplete } from 'antd-v';
import { ref } from 'vue';

const value = ref('');
const options = [{ value: 'Burns Bay Road' }, { value: 'Downing Street' }, { value: 'Wall Street' }];
</script>

<template>
  <AutoComplete
    v-model:value="value"
    :style="{ width: '200px' }"
    :options="options"
    placeholder="try to type `b`"
    :show-search="{
      filterOption: (inputValue: string, option: any) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    }"
  />
</template>
