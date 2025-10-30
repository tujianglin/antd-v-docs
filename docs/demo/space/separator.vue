<script lang="tsx" setup>
import { Divider, Space, Typography } from 'antd-v';
import { h } from 'vue';
</script>
<template>
  <Space :separator="h(Divider, { vertical: true })">
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
</template>
