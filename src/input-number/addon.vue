<script setup lang="tsx">
import { SettingOutlined } from '@ant-design/icons-vue';
import { Cascader, InputNumber, Select, Space } from 'antd-v';
import { h } from 'vue';

const selectBefore = (
  <Select
    style={{ width: `${60}px` }}
    value="add"
    options={[
      { value: 'add', label: '+' },
      { value: 'minus', label: '-' },
    ]}
  ></Select>
);

const selectAfter = (
  <Select
    style={{ width: `${60}px` }}
    value="USD"
    options={[
      { value: 'USD', label: '$' },
      { value: 'EUR', label: '€' },
      { value: 'GBP', label: '£' },
      { value: 'CNY', label: '¥' },
    ]}
  ></Select>
);
</script>

<template>
  <Space vertical>
    <InputNumber addon-before="+" addon-after="$" :value="100" />
    <InputNumber :addon-before="selectBefore" :addon-after="selectAfter" :value="100" />
    <InputNumber :addon-after="() => h(SettingOutlined)" :value="100" />
    <InputNumber :addon-before="() => h(Cascader, { placeholder: 'cascader', style: { width: '150px' } })" :value="100" />
    <InputNumber addon-before="+" :addon-after="() => h(SettingOutlined)" :value="100" :disabled="true" controls />
    <InputNumber prefix="¥" addon-before="+" :addon-after="() => h(SettingOutlined)" :value="100" :disabled="true" controls />
  </Space>
</template>
