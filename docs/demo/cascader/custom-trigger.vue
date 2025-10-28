<script setup lang="tsx">
import { Cascader } from 'antd-v';
import { ref } from 'vue';

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
      },
    ],
  },
];

const text = ref('Unselect');

const updateText = (_, selectedOptions) => {
  text.value = selectedOptions.map((o) => o.label).join(', ');
};
</script>

<template>
  <span>
    {{ text }}
    &nbsp;
    <Cascader :options="options" @change="updateText">
      <template #trigger="triggerProps">
        <a href="#" @click.prevent>{{ triggerProps }}</a>
      </template>
    </Cascader>
  </span>
</template>
