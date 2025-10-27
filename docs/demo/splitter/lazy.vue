<script setup lang="tsx">
import { Flex, Space, Splitter, Typography } from 'antd-v';
const Desc = (props) => (
  <Flex justify="center" align="center" class="h-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);
</script>

<template>
  <Space vertical style="width: 100%">
    <Splitter lazy style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
      <Splitter.Panel default-size="40%" min="20%" max="70%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
    <Splitter lazy orientation="vertical" style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
      <Splitter.Panel default-size="40%" min="30%" max="70%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
  </Space>
</template>
