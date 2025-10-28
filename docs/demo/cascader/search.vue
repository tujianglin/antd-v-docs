<script setup lang="tsx">
import { Cascader } from 'antd-v';

interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

const filter = (inputValue: string, path: any[]) =>
  path.some((option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
</script>

<template>
  <Cascader :options="options" placeholder="Please select" :show-search="{ filter, onSearch: (value) => console.log(value) }" />
</template>
