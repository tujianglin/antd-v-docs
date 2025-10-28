<script setup lang="tsx">
import { CloseSquareFilled } from '@ant-design/icons-vue';
import { Mentions } from 'antd-v';
import { h, ref } from 'vue';

const value = ref('hello world');
</script>

<template>
  <div>
    <Mentions v-model:value="value" allow-clear />
    <br />
    <br />
    <Mentions v-model:value="value" :allow-clear="{ clearIcon: () => h(CloseSquareFilled) }" />
    <br />
    <br />
    <Mentions v-model:value="value" allow-clear :rows="3" />
  </div>
</template>
