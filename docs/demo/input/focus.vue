<script setup lang="tsx">
import { Button, Input, Space, Switch } from 'antd-v';
import { ref } from 'vue';

const { TextArea } = Input;

const inputRef = ref();
const input = ref(true);
const value = ref('Ant Design love you!');

const setInput = (val: boolean) => {
  input.value = val;
};

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
  <Space vertical :style="{ width: '100%' }">
    <Space wrap>
      <Button @click="focusStart">Focus at first</Button>
      <Button @click="focusEnd">Focus at last</Button>
      <Button @click="focusAll">Focus to select all</Button>
      <Button @click="focusPreventScroll">Focus prevent scroll</Button>
      <Switch :value="input" checked-children="Input" un-checked-children="TextArea" @change="() => setInput(!input)" />
    </Space>
    <br />
    <Input v-if="input" v-model:value="value" ref="inputRef" :style="{ width: '100%' }" />
    <TextArea v-else v-model:value="value" :style="{ width: '100%' }" />
  </Space>
</template>
