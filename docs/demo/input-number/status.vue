<script setup lang="ts">
import ClockCircleOutlined from '@ant-design/icons-vue/ClockCircleOutlined';
import { InputNumber, Space } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <Space vertical style="width: 100%">
    <InputNumber status="error" style="width: 100%" />
    <InputNumber status="warning" style="width: 100%" />
    <InputNumber status="error" style="width: 100%" :prefix="() => h(ClockCircleOutlined)" />
    <InputNumber status="warning" style="width: 100%" :prefix="() => h(ClockCircleOutlined)" />
  </Space>
</template>
