<script setup lang="tsx">
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Space, Switch } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <Space vertical>
    <Switch checked-children="开启" un-checked-children="关闭" :value="true" />
    <Switch checked-children="1" un-checked-children="0" />
    <Switch :checked-children="() => h(CheckOutlined)" :un-checked-children="() => h(CloseOutlined)" :value="true" />
  </Space>
</template>
