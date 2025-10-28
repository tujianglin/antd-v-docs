<script setup lang="tsx">
import { Flex, Mentions } from 'antd-v';
</script>

<template>
  <Flex vertical gap="12">
    <Mentions placeholder="Outlined" />
    <Mentions placeholder="Filled" variant="filled" />
    <Mentions placeholder="Borderless" variant="borderless" />
    <Mentions placeholder="Underlined" variant="underlined" />
  </Flex>
</template>
