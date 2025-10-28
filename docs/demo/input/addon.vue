<script setup lang="tsx">
import { SettingOutlined } from '@ant-design/icons-vue';
import { Cascader, Input, Select, Space } from 'antd-v';
import { h, ref } from 'vue';

const selectBefore = (
  <Select
    value="http://"
    options={[
      { value: 'http://', label: 'http://' },
      { value: 'https://', label: 'https://' },
    ]}
  ></Select>
);

const selectAfter = (
  <Select
    value=".com"
    options={[
      { value: '.com', label: '.com' },
      { value: '.jp', label: '.jp' },
      { value: '.cn', label: '.cn' },
      { value: '.org', label: '.org' },
    ]}
  ></Select>
);

const value1 = ref('mysite');
const value2 = ref('mysite');
const value3 = ref('mysite');
const value4 = ref('mysite');
const value5 = ref('mysite');
</script>

<template>
  <Space vertical>
    <Input addon-before="http://" addon-after=".com" v-model:value="value1" />
    <Input :addon-before="selectBefore" :addon-after="selectAfter" v-model:value="value2" />
    <Input :addon-after="() => h(SettingOutlined)" v-model:value="value3" />
    <Input addon-before="http://" suffix=".com" v-model:value="value4" />
    <Input :addon-before="() => h(Cascader, { placeholder: 'cascader', style: { width: 150 } })" v-model:value="value5" />
  </Space>
</template>
