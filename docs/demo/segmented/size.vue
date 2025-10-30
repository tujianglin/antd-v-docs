<script lang="tsx" setup>
import { Flex, Segmented } from 'antd-v';
import {} from 'vue';
</script>
<template>
  <Flex gap="small" align="flex-start" vertical>
    <Segmented size="large" :options="['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']" />
    <Segmented :options="['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']" />
    <Segmented size="small" :options="['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']" />
  </Flex>
</template>
