<script lang="tsx" setup>
import { UserOutlined } from '@ant-design/icons-vue';
import { Avatar, Badge, Space } from 'antd-v';
</script>
<template>
  <Space :size="24">
    <Badge :count="1">
      <Avatar shape="square" :icon="UserOutlined" />
    </Badge>
    <Badge dot>
      <Avatar shape="square" :icon="UserOutlined" />
    </Badge>
  </Space>
</template>
