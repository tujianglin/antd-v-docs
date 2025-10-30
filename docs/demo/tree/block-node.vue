<script lang="tsx" setup>
import { Tree, TreeDataNode } from 'antd-v';

const treeData: TreeDataNode[] = [
  {
    title: 'parent',
    key: '0',
    children: [
      {
        title: 'child 1',
        key: '0-0',
        disabled: true,
      },
      {
        title: 'child 2',
        key: '0-1',
        disableCheckbox: true,
      },
    ],
  },
];
</script>
<template>
  <Tree checkable :selected-keys="['0-1']" default-expand-all :tree-data="treeData" block-node />
</template>
