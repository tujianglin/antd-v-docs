<script setup lang="tsx">
import { AutoComplete, Flex } from 'antd-v';
import { ref } from 'vue';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const options = ref<any[]>([]);

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');

const getPanelValue = (searchText: string) =>
  !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

const handleSearch1 = (text: string) => {
  options.value = getPanelValue(text);
};

const handleSearch2 = (text: string) => {
  options.value = getPanelValue(text);
};

const handleSearch3 = (text: string) => {
  options.value = getPanelValue(text);
};
</script>

<template>
  <Flex vertical :gap="12">
    <AutoComplete
      v-model:value="value1"
      :options="options"
      :style="{ width: '200px' }"
      placeholder="Outlined"
      @search="handleSearch1"
      @select="(value) => console.log(value)"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options"
      :style="{ width: '200px' }"
      placeholder="Filled"
      variant="filled"
      @search="handleSearch2"
      @select="(value) => console.log(value)"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options"
      :style="{ width: '200px' }"
      placeholder="Borderless"
      variant="borderless"
      @search="handleSearch3"
      @select="(value) => console.log(value)"
    />
  </Flex>
</template>
