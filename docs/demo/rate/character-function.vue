<script setup lang="tsx">
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { Flex, Rate } from 'antd-v';

const customIcons: Record<number, any> = {
  1: () => <FrownOutlined></FrownOutlined>,
  2: () => <FrownOutlined></FrownOutlined>,
  3: () => <MehOutlined></MehOutlined>,
  4: () => <SmileOutlined></SmileOutlined>,
  5: () => <SmileOutlined></SmileOutlined>,
};
</script>

<template>
  <Flex gap="middle" vertical>
    <Rate :value="2" :character="({ index = 0 }) => index + 1" />
    <Rate :value="3" :character="({ index = 0 }) => customIcons[index + 1]" />
  </Flex>
</template>
