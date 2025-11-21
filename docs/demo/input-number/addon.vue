<script setup lang="tsx">
import { SettingOutlined } from '@ant-design/icons-vue';
import { Cascader, InputNumber, Select, Space } from 'antd-v';

const SelectBefore = (
  <Select
    style={{ width: `${60}px` }}
    value="add"
    options={[
      { value: 'add', label: '+' },
      { value: 'minus', label: '-' },
    ]}
  ></Select>
);

const SelectAfter = (
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
    <Space.Compact>
      <Space.Addon>+</Space.Addon>
      <InputNumber :value="100" />
      <Space.Addon>$</Space.Addon>
    </Space.Compact>
    <Space.Compact>
      <SelectBefore />
      <InputNumber :value="100" />
      <SelectAfter />
    </Space.Compact>

    <Space.Compact>
      <InputNumber :value="100" />
      <Space.Addon> <SettingOutlined /></Space.Addon>
    </Space.Compact>
    <Space.Compact>
      <Cascader placeholder="cascader" style="width: 150px" />
      <InputNumber :value="100" />
    </Space.Compact>
  </Space>
</template>
