<script setup lang="tsx">
import { Space, TimePicker } from 'antd-v';
</script>

<template>
  <Space vertical>
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
</template>
