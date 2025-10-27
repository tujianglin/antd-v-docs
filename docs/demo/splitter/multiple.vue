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
  <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel collapsible>
      <Desc :text="1" />
    </Splitter.Panel>
    <Splitter.Panel :collapsible="{ start: true }">
      <Desc :text="2" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc :text="3" />
    </Splitter.Panel>
  </Splitter>
</template>
