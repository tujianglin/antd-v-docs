<script lang="tsx" setup>
import { Space, TreeSelect } from 'antd-v';
</script>
<template>
  <Space vertical style="width: 100%">
    <TreeSelect status="error" style="width: 100%" placeholder="Error" />
    <TreeSelect status="warning" style="width: 100%" multiple placeholder="Warning multiple" />
  </Space>
</template>
