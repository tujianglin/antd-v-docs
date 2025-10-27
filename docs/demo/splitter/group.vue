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
  <Splitter style="height: 300px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
    <Splitter.Panel collapsible>
      <Desc text="Left" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Splitter orientation="vertical">
        <Splitter.Panel>
          <Desc text="Top" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="Bottom" />
        </Splitter.Panel>
      </Splitter>
    </Splitter.Panel>
  </Splitter>
</template>
