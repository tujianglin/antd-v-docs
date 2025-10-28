<script setup lang="tsx">
import ClockCircleOutlined from '@ant-design/icons-vue/ClockCircleOutlined';
import { Input, Space } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <Space vertical style="width: 100%">
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="error" :prefix="() => h(ClockCircleOutlined)" placeholder="Error with prefix" />
    <Input status="warning" :prefix="() => h(ClockCircleOutlined)" placeholder="Warning with prefix" />
  </Space>
</template>
