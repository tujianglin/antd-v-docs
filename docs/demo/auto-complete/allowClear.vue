<script setup lang="tsx">
import { CloseSquareFilled } from '@ant-design/icons-vue';
import { AutoComplete } from 'antd-v';
import { h, ref } from 'vue';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const options = ref<any[]>([]);

const value1 = ref('');
const value2 = ref('');

const getPanelValue = (searchText: string) =>
  !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

const handleSearch1 = (text: string) => {
  options.value = getPanelValue(text);
};

const handleSearch2 = (text: string) => {
  options.value = getPanelValue(text);
};
</script>

<template>
  <div>
    <AutoComplete
      v-model:value="value1"
      :options="options"
      :style="{ width: '200px' }"
      :show-search="{ onSearch: handleSearch1 }"
      placeholder="UnClearable"
      :allow-clear="false"
    />
    <br />
    <br />
    <AutoComplete
      v-model:value="value2"
      :options="options"
      :style="{ width: '200px' }"
      :show-search="{ onSearch: handleSearch2 }"
      placeholder="Customized clear icon"
      :allow-clear="{ clearIcon: h(CloseSquareFilled) }"
    />
  </div>
</template>
