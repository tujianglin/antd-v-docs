<script lang="tsx" setup>
import { Steps } from 'antd-v';

const content = 'This is a content';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Process',
    content,
  },
  {
    title: 'Waiting',
    content,
  },
];
</script>
<template>
  <Steps :current="1" status="error" :items="items" />
</template>
