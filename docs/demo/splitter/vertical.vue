<script setup lang="tsx">
import { Flex, Splitter, Typography } from 'antd-v';

const Desc = (props) => (
  <Flex justify="center" align="center" class="h-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);
</script>

<template>
  <Splitter vertical style="height: 300px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel>
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
</template>
