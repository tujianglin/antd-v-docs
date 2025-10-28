<script setup lang="ts">
import { DatePicker, Radio, Space } from 'antd-v';
import type { SizeType } from 'node_modules/antd-v/dist/components/config-provider/SizeContext';
import { ref } from 'vue';

const RangePicker = DatePicker.RangePicker;
const size = ref<SizeType>('middle');
</script>

<template>
  <Space vertical :size="12">
    <Radio.Group
      v-model:value="size"
      :options="[
        { label: 'Large', value: 'large' },
        { label: 'middle', value: 'middle' },
        { label: 'Small', value: 'small' },
      ]"
    />
    <DatePicker :size="size" />
    <DatePicker :size="size" picker="month" />
    <RangePicker :size="size" />
    <DatePicker :size="size" picker="week" />
  </Space>
</template>
