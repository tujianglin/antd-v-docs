<script setup lang="tsx">
import { Button, InputNumber, Space } from 'antd-v';
import { ref } from 'vue';

const inputRef = ref();

const focusStart = () => {
  inputRef.value?.focus({ cursor: 'start' });
};

const focusEnd = () => {
  inputRef.value?.focus({ cursor: 'end' });
};

const focusAll = () => {
  inputRef.value?.focus({ cursor: 'all' });
};

const focusPreventScroll = () => {
  inputRef.value?.focus({ preventScroll: true });
};
</script>

<template>
  <Space vertical style="width: 100%">
    <Space wrap>
      <Button @click="focusStart">Focus at first</Button>
      <Button @click="focusEnd">Focus at last</Button>
      <Button @click="focusAll">Focus to select all</Button>
      <Button @click="focusPreventScroll">Focus prevent scroll</Button>
    </Space>
    <InputNumber style="width: 100%" :value="999" ref="inputRef" />
  </Space>
</template>
