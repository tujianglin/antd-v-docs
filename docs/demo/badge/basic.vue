<script lang="tsx" setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { Avatar, Badge, Space } from 'antd-v';
import { h } from 'vue';
</script>
<template>
  <Space size="middle">
    <Badge :count="5">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge :count="0" show-zero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge :count="h(ClockCircleOutlined, { style: { color: '#f5222d' } })">
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
</template>
