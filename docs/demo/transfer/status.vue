<script setup lang="tsx">
import { Flex, Transfer } from 'antd-v';
</script>

<template>
  <Flex gap="middle" vertical>
    <Transfer status="error" />
    <Transfer status="warning" show-search />
  </Flex>
</template>
