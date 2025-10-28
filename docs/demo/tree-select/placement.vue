<script setup lang="tsx">
import { Radio, TreeSelect } from 'antd-v';
import { h, ref } from 'vue';

const RadioGroup = Radio.Group;

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: () => h('b', { style: { color: '#08c' } }, 'leaf3'),
          },
        ],
      },
    ],
  },
];

const placement = ref<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>('topLeft');
</script>

<template>
  <div>
    <RadioGroup
      v-model:value="placement"
      :options="[
        { label: 'topLeft', value: 'topLeft' },
        { label: 'topRight', value: 'topRight' },
        { label: 'bottomLeft', value: 'bottomLeft' },
        { label: 'bottomRight', value: 'bottomRight' },
      ]"
    />
    <br />
    <br />

    <TreeSelect
      show-search
      :styles="{
        popup: {
          root: {
            maxHeight: '400px',
            overflow: 'auto',
            minWidth: '300px',
          },
        },
      }"
      placeholder="Please select"
      :popup-match-select-width="false"
      :placement="placement"
      allow-clear
      tree-default-expand-all
      :tree-data="treeData"
    />
  </div>
</template>
