<script setup lang="tsx">
import { InputNumber, Space } from 'antd-v';

const formatter = (value: number) => {
  const [start, end] = `${value}`.split('.') || [];
  const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$ ${end ? `${v}.${end}` : `${v}`}`;
};

const parser = (value?: string) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number;
</script>

<template>
  <Space>
    <InputNumber :value="1000" :formatter="formatter" :parser="parser" />
    <InputNumber
      :value="100"
      :min="0"
      :max="100"
      :formatter="(value) => `${value}%`"
      :parser="(value) => value?.replace('%', '') as unknown as number"
    />
  </Space>
</template>
