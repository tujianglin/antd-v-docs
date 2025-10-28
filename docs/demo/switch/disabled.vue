<script setup lang="tsx">
import { Button, Space, Switch } from 'antd-v';
import { ref } from 'vue';

const disabled = ref(true);

const toggle = () => {
  disabled.value = !disabled.value;
};
</script>

<template>
  <Space vertical>
    <Switch :disabled="disabled" :value="true" />
    <Button type="primary" @click="toggle"> Toggle disabled </Button>
  </Space>
</template>
