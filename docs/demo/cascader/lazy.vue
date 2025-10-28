<script setup lang="tsx">
import { Cascader } from 'antd-v';
import { ref } from 'vue';

interface Option {
  value?: string | number | null;
  label: string | number;
  children?: Option[];
  isLeaf?: boolean;
}

const optionLists: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const options = ref<Option[]>(optionLists);

const loadData = (selectedOptions) => {
  const targetOption = selectedOptions[selectedOptions.length - 1];

  // load options lazily
  setTimeout(() => {
    targetOption.children = [
      {
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      },
      {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      },
    ];
    options.value = [...options.value];
  }, 1000);
};
</script>

<template>
  <Cascader :options="options" :load-data="loadData" change-on-select />
</template>
