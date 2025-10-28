<script setup lang="tsx">
import { Cascader, Space } from 'antd-v';
</script>

<template>
  <Space vertical>
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
</template>
