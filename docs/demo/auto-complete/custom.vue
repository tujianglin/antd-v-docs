<script setup lang="tsx">
import { AutoComplete, Input } from 'antd-v';
import { ref } from 'vue';

const { TextArea } = Input;

const value = ref('');
const options = ref<any[]>([]);

const handleSearch = (value: string) => {
  options.value = !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }];
};

const handleKeyPress = (ev: KeyboardEvent) => {
  console.log('handleKeyPress', ev);
};

const onSelect = (value: string) => {
  console.log('onSelect', value);
};
</script>

<template>
  <AutoComplete
    v-model:value="value"
    :options="options"
    :style="{ width: '200px' }"
    @select="onSelect"
    :show-search="{ onSearch: handleSearch }"
  >
    <TextArea
      v-model:value="value"
      placeholder="input here"
      class="custom"
      :style="{ height: '50px' }"
      @keypress="handleKeyPress"
    />
  </AutoComplete>
</template>
