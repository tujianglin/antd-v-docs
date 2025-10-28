<script lang="tsx" setup>
import { DatePicker, Space } from 'antd-v';

const { RangePicker } = DatePicker;
</script>
<template>
  <Space orientation="vertical" :size="12">
    <DatePicker :render-extra-footer="() => 'extra footer'" />
    <DatePicker :render-extra-footer="() => 'extra footer'" show-time />
    <RangePicker :render-extra-footer="() => 'extra footer'" />
    <RangePicker :render-extra-footer="() => 'extra footer'" show-time />
    <DatePicker :render-extra-footer="() => 'extra footer'" picker="month" />
  </Space>
</template>
