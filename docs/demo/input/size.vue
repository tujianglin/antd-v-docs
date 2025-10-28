<script setup lang="tsx">
import { UserOutlined } from '@ant-design/icons-vue';
import { Input } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <div>
    <Input size="large" placeholder="large size" :prefix="() => h(UserOutlined)" />
    <br />
    <br />
    <Input placeholder="default size" :prefix="() => h(UserOutlined)" />
    <br />
    <br />
    <Input size="small" placeholder="small size" :prefix="() => h(UserOutlined)" />
  </div>
</template>
