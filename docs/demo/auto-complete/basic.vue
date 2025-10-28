<script setup lang="tsx">
import { AutoComplete } from 'antd-v';
import { ref } from 'vue';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const value1 = ref('');
const value2 = ref('');
const options = ref<any[]>([]);
const anotherOptions = ref<any[]>([]);

const getPanelValue = (searchText: string) =>
  !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

const onSelect = (data: string) => {
  console.log('onSelect', data);
};

const handleChange = (data: string) => {
  value2.value = data;
};

const handleSearch1 = (text: string) => {
  options.value = getPanelValue(text);
};

const handleSearch2 = (text: string) => {
  anotherOptions.value = getPanelValue(text);
};
</script>

<template>
  <div>
    <AutoComplete
      v-model:value="value1"
      :options="options"
      :style="{ width: '200px' }"
      @select="onSelect"
      :show-search="{ onSearch: handleSearch1 }"
      placeholder="input here"
    />
    <br />
    <br />
    <AutoComplete
      v-model:value="value2"
      :show-search="{ onSearch: handleSearch2 }"
      :options="anotherOptions"
      :style="{ width: '200px' }"
      @select="onSelect"
      @change="handleChange"
      placeholder="control mode"
    />
  </div>
</template>
