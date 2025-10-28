<script setup lang="tsx">
import { Cascader, Flex, Switch } from 'antd-v';
import { ref } from 'vue';

interface Option {
  value: string | number;
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

const onChange = (value) => {
  console.log(value);
};

const onMultipleChange = (value) => {
  console.log(value);
};

const disabled = ref(false);
</script>

<template>
  <Flex vertical gap="small" align="flex-start">
    <Switch v-model:value="disabled" checked-children="Enabled" un-checked-children="Disabled" aria-label="disabled switch" />
    <Cascader.Panel :options="options" @change="onChange" :disabled="disabled" />
    <Cascader.Panel multiple :options="options" @change="onMultipleChange" :disabled="disabled" />
    <Cascader.Panel />
  </Flex>
</template>
