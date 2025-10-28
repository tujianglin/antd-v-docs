<script lang="tsx" setup>
import { DatePicker, Space } from 'antd-v';
</script>
<template>
  <Space orientation="vertical" style="width: 100%">
    <DatePicker status="error" style="width: 100%" />
    <DatePicker status="warning" style="width: 100%" />
    <DatePicker.RangePicker status="error" style="width: 100%" />
    <DatePicker.RangePicker status="warning" style="width: 100%" />
  </Space>
</template>
