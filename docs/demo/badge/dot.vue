<script lang="tsx" setup>
import { NotificationOutlined } from '@ant-design/icons-vue';
import { Badge, Space } from 'antd-v';
</script>
<template>
  <Space>
    <Badge dot>
      <NotificationOutlined :style="{ fontSize: `${16}px` }" />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
</template>
