<script lang="tsx" setup>
import { Avatar, Badge, Space } from 'antd-v';
</script>
<template>
  <Space size="middle">
    <Badge size="default" :count="5">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" :count="5">
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
</template>
