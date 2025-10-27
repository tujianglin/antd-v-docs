<script setup lang="tsx">
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  ColumnWidthOutlined,
} from '@ant-design/icons-vue';
import { ConfigProvider, Divider, Flex, Splitter, Typography } from 'antd-v';
import { h } from 'vue';

const Desc = (props) => (
  <Flex justify="center" align="center" class="h-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);
</script>

<template>
  <ConfigProvider
    :theme="{
      components: {
        Splitter: { splitBarSize: 1, splitTriggerSize: 16 },
      },
    }"
  >
    <Splitter
      style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
      :dragger-icon="() => h(ColumnWidthOutlined)"
      :collapsible-icon="{
        start: () => h(CaretLeftOutlined),
        end: () => h(CaretRightOutlined),
      }"
    >
      <Splitter.Panel default-size="40%" min="20%" max="70%" collapsible>
        <Desc text="Panel 1" />
      </Splitter.Panel>

      <Splitter.Panel collapsible>
        <Desc text="Panel 2" />
      </Splitter.Panel>

      <Splitter.Panel :resizable="false">
        <Desc text="Panel 3" />
      </Splitter.Panel>
    </Splitter>

    <Divider />

    <Splitter
      orientation="vertical"
      style="height: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)"
      :dragger-icon="null"
      :collapsible-icon="{
        start: () => h(CaretUpOutlined),
        end: () => h(CaretDownOutlined),
      }"
    >
      <Splitter.Panel default-size="40%" min="30%" max="70%" collapsible>
        <Desc text="First" />
      </Splitter.Panel>

      <Splitter.Panel collapsible>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
  </ConfigProvider>
</template>
