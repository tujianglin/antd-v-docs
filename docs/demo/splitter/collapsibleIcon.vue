<script setup lang="tsx">
import { Flex, Radio, Splitter, Typography } from 'antd-v';
import { ref } from 'vue';

const RadioGroup = Radio.Group;

const Desc = (props) => (
  <Flex justify="center" align="center" class="w-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);

const options = [
  { label: 'Auto', value: 'auto' },
  { label: 'True', value: true },
  { label: 'False', value: false },
];

const showIconMode = ref<'auto' | boolean>(true);
</script>

<template>
  <Flex vertical :gap="20">
    <Flex :gap="5">
      <span>ShowCollapsibleIcon:</span>
      <RadioGroup :options="options" v-model:value="showIconMode" />
    </Flex>
    <Splitter style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)">
      <Splitter.Panel :collapsible="{ start: true, end: true, showCollapsibleIcon: showIconMode }" min="20%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel :collapsible="{ start: true, end: true, showCollapsibleIcon: showIconMode }">
        <Desc text="Second" />
      </Splitter.Panel>
      <Splitter.Panel :collapsible="{ start: true, end: true, showCollapsibleIcon: showIconMode }">
        <Desc text="Third" />
      </Splitter.Panel>
    </Splitter>
  </Flex>
</template>
