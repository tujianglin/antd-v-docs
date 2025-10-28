<script setup lang="tsx">
import { Space, TimePicker } from 'antd-v';
</script>

<template>
  <Space wrap>
    <TimePicker use12-hours />
    <TimePicker use12-hours format="h:mm:ss A" />
    <TimePicker use12-hours format="h:mm a" />
  </Space>
</template>
