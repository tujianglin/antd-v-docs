<script lang="tsx" setup>
import { Flex, Timeline, Typography } from 'antd-v';

const sharedProps = {
  items: [
    {
      title: '05:10',
      content: 'Create a services',
    },
    {
      title: '09:03',
      content: 'Solve initial network problems',
    },
    {
      content: 'Technical testing',
    },
    {
      title: '11:28',
      content: 'Network problems being solved',
    },
  ],
};
</script>
<template>
  <Flex vertical gap="middle">
    <Typography.Title :level="5" :style="{ margin: 0 }"> titleSpan = 100px </Typography.Title>
    <Timeline v-bind="sharedProps" title-span="100px" />

    <Typography.Title :level="5" :style="{ margin: 0 }"> titleSpan = 25% </Typography.Title>
    <Timeline v-bind="sharedProps" title-span="25%" />

    <Typography.Title :level="5" :style="{ margin: 0 }"> titleSpan = 18, mode = end </Typography.Title>
    <Timeline v-bind="sharedProps" :title-span="18" mode="end" />
  </Flex>
</template>
