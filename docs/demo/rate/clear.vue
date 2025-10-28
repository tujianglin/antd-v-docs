<script setup lang="tsx">
import { Flex, Rate } from 'antd-v';
</script>

<template>
  <Flex gap="middle" vertical>
    <Flex gap="middle">
      <Rate :value="3" />
      <span>allowClear: true</span>
    </Flex>
    <Flex gap="middle">
      <Rate :value="3" :allow-clear="false" />
      <span>allowClear: false</span>
    </Flex>
  </Flex>
</template>
