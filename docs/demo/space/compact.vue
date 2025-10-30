<script lang="tsx" setup>
import { CopyOutlined } from '@ant-design/icons-vue';
import {
  AutoComplete,
  Button,
  Cascader,
  ColorPicker,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Space,
  TimePicker,
  Tooltip,
  TreeSelect,
  TreeSelectProps,
} from 'antd-v';
import { ref } from 'vue';

const treeData = ref<TreeSelectProps['treeData']>([
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      {
        title: 'parent 1-0',
        value: 'parent 1-0',
        children: [
          {
            title: 'my leaf',
            value: 'leaf1',
          },
          {
            title: 'your leaf',
            value: 'leaf2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'parent 1-1',
      },
    ],
  },
]);
</script>

<template>
  <Space orientation="vertical" size="middle" class="site-space-compact-wrapper">
    <Space.Compact block>
      <Input :style="{ width: '20%' }" value="0571" />
      <Input :style="{ width: '30%' }" value="26888888" />
    </Space.Compact>
    <Space.Compact block size="small">
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://ant.design" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://ant.design" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="git@github.com:ant-design/ant-design.git" />
      <Tooltip title="copy git url">
        <Button>
          <CopyOutlined />
        </Button>
      </Tooltip>
    </Space.Compact>
    <Space.Compact block>
      <Select
        value="Zhejiang"
        allow-clear
        :options="[
          { value: 'Zhejiang', label: 'Zhejiang' },
          { value: 'Jiangsu', label: 'Jiangsu' },
        ]"
      />
      <Input :style="{ width: '50%' }" value="Xihu District, Hangzhou" />
    </Space.Compact>
    <Space.Compact block>
      <Select
        allow-clear
        mode="multiple"
        value="Zhejianggggg"
        :style="{ width: '50%' }"
        :options="[
          { value: 'Zhejiang', label: 'Zhejiang' },
          { value: 'Jiangsu', label: 'Jiangsu' },
        ]"
      />
      <Input :style="{ width: '50%' }" value="Xihu District, Hangzhou" />
    </Space.Compact>
    <Space.Compact block>
      <Input.Search :style="{ width: '30%' }" value="0571" />
      <Input.Search allow-clear :style="{ width: '50%' }" value="26888888" />
      <Input.Search :style="{ width: '20%' }" value="+1" />
    </Space.Compact>
    <Space.Compact block>
      <Select
        value="Option1"
        :options="[
          { value: 'Option1', label: 'Option1' },
          { value: 'Option2', label: 'Option2' },
        ]"
      />
      <Input :style="{ width: '50%' }" value="input content" />
      <InputNumber :value="12" />
    </Space.Compact>
    <Space.Compact block>
      <Input :style="{ width: '50%' }" value="input content" />
      <DatePicker :style="{ width: '50%' }" />
    </Space.Compact>
    <Space.Compact block>
      <DatePicker.RangePicker :style="{ width: '70%' }" />
      <Input :style="{ width: '30%' }" value="input content" />
      <Button type="primary">查询</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input :style="{ width: '30%' }" value="input content" />
      <DatePicker.RangePicker :style="{ width: '70%' }" />
    </Space.Compact>
    <Space.Compact block>
      <Select
        value="Option1-1"
        :options="[
          { value: 'Option1-1', label: 'Option1-1' },
          { value: 'Option1-2', label: 'Option1-2' },
        ]"
      />
      <Select
        value="Option2-2"
        :options="[
          { value: 'Option2-1', label: 'Option2-1' },
          { value: 'Option2-2', label: 'Option2-2' },
        ]"
      />
    </Space.Compact>
    <Space.Compact block>
      <Select
        value="1"
        :options="[
          { value: '1', label: 'Between' },
          { value: '2', label: 'Except' },
        ]"
      />
      <Input :style="{ width: 100, textAlign: 'center' }" placeholder="Minimum" />
      <Input
        class="site-input-split"
        :style="{
          width: 30,
          borderLeft: 0,
          borderRight: 0,
          pointerEvents: 'none',
        }"
        placeholder="~"
        disabled
      />
      <Input
        class="site-input-right"
        :style="{
          width: 100,
          textAlign: 'center',
        }"
        placeholder="Maximum"
      />
    </Space.Compact>
    <Space.Compact block>
      <Select
        value="Sign Up"
        :style="{ width: '30%' }"
        :options="[
          { value: 'Sign Up', label: 'Sign Up' },
          { value: 'Sign In', label: 'Sign In' },
        ]"
      />
      <AutoComplete :style="{ width: '70%' }" placeholder="Email" :options="[{ value: 'text 1' }, { value: 'text 2' }]" />
    </Space.Compact>
    <Space.Compact block>
      <TimePicker :style="{ width: '70%' }" />
      <Cascader
        :style="{ width: '70%' }"
        :options="[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ]"
        placeholder="Select Address"
      />
    </Space.Compact>
    <Space.Compact block>
      <TimePicker.RangePicker />
      <TreeSelect
        show-search
        :style="{ width: '60%' }"
        value="leaf1"
        :dropdown-style="{ maxHeight: 400, overflow: 'auto' }"
        placeholder="Please select"
        allow-clear
        tree-default-expand-all
        :tree-data="treeData"
      />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact>
      <Input placeholder="input here" />
      <InputNumber placeholder="another input" addon-before="$" />
      <InputNumber placeholder="another input" addon-after="$" />
    </Space.Compact>
    <Space.Compact>
      <Input placeholder="input here" />
      <ColorPicker />
    </Space.Compact>
    <Space.Compact>
      <Button type="primary">Button</Button>
      <Input placeholder="input here" addon-after="$" />
    </Space.Compact>
  </Space>
</template>
