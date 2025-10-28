<script setup lang="tsx">
import type { CascaderProps } from 'antd-v';
import { Cascader } from 'antd-v';
import { h } from 'vue';

type DefaultOptionType = CascaderProps['options'][number];

interface Option {
  value: string;
  label: string;
  children?: Option[];
  code?: number;
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
            code: 752100,
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
            code: 453400,
          },
        ],
      },
    ],
  },
];

const handleAreaClick = (e: Event, label: string, option: DefaultOptionType) => {
  e.stopPropagation();
  console.log('clicked', label, option);
};

const displayRender = (labels, selectedOptions = []) =>
  labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return h('span', { key: option.value }, [
        label,
        ' (',
        h(
          'a',
          {
            onClick: (e: Event) => handleAreaClick(e, label as string, option),
          },
          option.code,
        ),
        ')',
      ]);
    }
    return h('span', { key: option.value }, [label, ' / ']);
  });

const optionRender = (option: any) => {
  return h('span', [`${option.label} (${option.value})`]);
};
</script>

<template>
  <Cascader
    :options="options"
    :value="['zhejiang', 'hangzhou', 'xihu']"
    :display-render="displayRender"
    style="width: 100%"
    :option-render="optionRender"
  />
</template>
