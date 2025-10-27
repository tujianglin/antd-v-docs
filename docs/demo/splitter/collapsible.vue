<script setup lang="tsx">
import { Flex, Splitter, Typography } from 'antd-v';

const Desc = (props) => (
  <Flex justify="center" align="center" class="h-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);

const CustomSplitter = (props) => (
  <Splitter style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', ...props.style }} {...props}>
    <Splitter.Panel collapsible min="20%">
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel collapsible>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
);
</script>

<template>
  <Flex gap="middle" vertical>
    <CustomSplitter style="height: 200px" />
    <CustomSplitter style="height: 300px" orientation="vertical" />
  </Flex>
</template>
