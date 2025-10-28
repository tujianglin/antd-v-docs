<script setup lang="tsx">
import { UserOutlined } from '@ant-design/icons-vue';
import { ConfigProvider, Input } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <div>
    <ConfigProvider :theme="{ token: { controlHeight: 28 } }">
      <Input placeholder="Basic usage" />
    </ConfigProvider>
    <ConfigProvider component-size="small" :theme="{ token: {}, components: { Input: { inputFontSizeSM: 12 } } }">
      <Input placeholder="Basic usage" />
    </ConfigProvider>
    <ConfigProvider :theme="{ components: { Input: { inputFontSize: 10 } } }">
      <Input placeholder="With prefix" :prefix="() => h(UserOutlined)" />
    </ConfigProvider>
  </div>
</template>
