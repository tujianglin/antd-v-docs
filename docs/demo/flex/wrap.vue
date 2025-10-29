<script setup lang="ts">
import { Button, Flex } from 'antd-v';
</script>

<template>
  <Flex wrap="wrap" gap="small">
    <Button v-for="item in new Array(24)" :key="item" type="primary">Button</Button>
  </Flex>
</template>
