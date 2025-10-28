<script setup lang="tsx">
import { Cascader } from 'antd-v';

interface Option {
  value: string;
  label: string;
  children?: Option[];
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
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <Cascader size="large" :options="options" />
  <br />
  <br />
  <Cascader :options="options" />
  <br />
  <br />
  <Cascader size="small" :options="options" />
  <br />
  <br />
</template>
