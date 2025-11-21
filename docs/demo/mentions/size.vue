<script lang="tsx" setup>
import { Flex, Mentions } from 'antd-v';
</script>
<template>
  <Flex vertical gap="middle">
    <Mentions size="large" placeholder="large size" />
    <Mentions placeholder="default size" />
    <Mentions size="small" placeholder="small size" />
  </Flex>
</template>
