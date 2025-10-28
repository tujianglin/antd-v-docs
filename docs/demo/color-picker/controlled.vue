<script setup lang="tsx">
import { ColorPicker, Space } from 'antd-v';
import { ref } from 'vue';

const color = ref('#1677ff');

const onChange = (c: any) => {
  color.value = c.toHexString();
};

const onChangeComplete = (c: any) => {
  color.value = c.toHexString();
};
</script>

<template>
  <Space>
    <ColorPicker v-model:value="color" @change="onChange" />
    <ColorPicker v-model:value="color" @change-complete="onChangeComplete" />
  </Space>
</template>
