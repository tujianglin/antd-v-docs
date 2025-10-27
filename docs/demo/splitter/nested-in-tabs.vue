<script setup lang="tsx">
import { Flex, Splitter, Tabs, Typography } from 'antd-v';

const Desc = (props) => (
  <Flex justify="center" align="center" class="h-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);

const SplitterContent = () => (
  <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel collapsible>
      <Desc text="1" />
    </Splitter.Panel>
    <Splitter.Panel collapsible={{ start: true }}>
      <Desc text="2" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="3" />
    </Splitter.Panel>
  </Splitter>
);
</script>

<template>
  <Tabs
    default-active-key="1"
    :items="[
      {
        key: '1',
        label: 'General',
        children: 'Content of Tab Pane 1',
      },
      {
        key: '2',
        label: 'Splitter Tab',
        children: SplitterContent,
      },
    ]"
  />
</template>
