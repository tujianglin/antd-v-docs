<script setup lang="ts">
import { Button, Space } from 'antd-v';
</script>

<template>
  <Space :size="[8, 16]" wrap>
    <Button v-for="_i in 20" :key="_i">Button</Button>
  </Space>
</template>
