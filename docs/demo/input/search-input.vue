<script setup lang="tsx">
import { AudioOutlined } from '@ant-design/icons-vue';
import { Input, Space } from 'antd-v';
import { h } from 'vue';

const { Search } = Input;
</script>

<template>
  <Space vertical>
    <Search placeholder="input search text" :style="{ width: 200 }" />
    <Search placeholder="input search text" allow-clear :style="{ width: 200 }" />
    <Search addon-before="https://" placeholder="input search text" allow-clear :style="{ width: 304 }" />
    <Search placeholder="input search text" enter-button />
    <Search placeholder="input search text" allow-clear enter-button="Search" size="large" />
    <Search
      placeholder="input search text"
      enter-button="Search"
      size="large"
      :suffix="() => h(AudioOutlined, { style: { fontSize: 16, color: '#1677ff' } })"
    />
  </Space>
</template>
