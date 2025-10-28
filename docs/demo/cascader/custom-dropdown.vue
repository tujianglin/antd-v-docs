<script setup lang="tsx">
import { Cascader, Divider } from 'antd-v';
import { h } from 'vue';

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

const popupRender = (menus: any) => {
  return h('div', [
    menus,
    h(Divider, { style: { margin: 0 } }),
    h('div', { style: { padding: '8px' } }, 'The footer is not very short.'),
  ]);
};
</script>

<template>
  <Cascader :options="options" :popup-render="popupRender" placeholder="Please select" />
</template>
