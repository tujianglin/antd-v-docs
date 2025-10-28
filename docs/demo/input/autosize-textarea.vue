<script setup lang="tsx">
import { Input } from 'antd-v';
import { ref } from 'vue';

const { TextArea } = Input;
const value = ref('');
</script>

<template>
  <div>
    <TextArea placeholder="Autosize height based on content lines" :auto-size="true" />
    <div style="margin: 24px 0"></div>
    <TextArea placeholder="Autosize height with minimum and maximum number of lines" :auto-size="{ minRows: 2, maxRows: 6 }" />
    <div style="margin: 24px 0"></div>
    <TextArea v-model:value="value" placeholder="Controlled autosize" :auto-size="{ minRows: 3, maxRows: 5 }" />
  </div>
</template>
