<script setup lang="ts">
import { HeartOutlined } from '@ant-design/icons-vue';
import { Flex, Rate } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <Flex vertical gap="middle">
    <Rate :character="() => h(HeartOutlined)" allow-half />
    <Rate character="A" allow-half :style="{ fontSize: 36 }" />
    <Rate character="好" allow-half />
  </Flex>
</template>
