<script setup lang="tsx">
import { InputNumber, Space } from 'antd-v';
</script>

<template>
  <Space wrap>
    <InputNumber size="large" :min="1" :max="100000" :value="3" />
    <InputNumber :min="1" :max="100000" :value="3" />
    <InputNumber size="small" :min="1" :max="100000" :value="3" />
  </Space>
</template>
