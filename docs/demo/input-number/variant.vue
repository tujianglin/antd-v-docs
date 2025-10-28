<script setup lang="ts">
import { Flex, InputNumber } from 'antd-v';
</script>

<template>
  <Flex vertical gap="12">
    <InputNumber placeholder="Outlined" style="width: 200px" />
    <InputNumber placeholder="Filled" variant="filled" style="width: 200px" />
    <InputNumber placeholder="Borderless" variant="borderless" style="width: 200px" />
    <InputNumber placeholder="Underlined" variant="underlined" style="width: 200px" />
  </Flex>
</template>
