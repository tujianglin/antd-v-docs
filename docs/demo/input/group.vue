<script setup lang="tsx">
import { SearchOutlined } from '@ant-design/icons-vue';
import { AutoComplete, Button, Cascader, Col, DatePicker, Input, InputNumber, Row, Select, Tooltip } from 'antd-v';
import { h } from 'vue';

const { Option } = Select;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{ value: 'xihu', label: 'West Lake' }],
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
        children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
      },
    ],
  },
];
</script>

<template>
  <div class="site-input-group-wrapper">
    <Input.Group size="large">
      <Row :gutter="8">
        <Col :span="5">
          <Input value="0571" />
        </Col>
        <Col :span="8">
          <Input value="26888888" />
        </Col>
      </Row>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input :style="{ width: '20%' }" value="0571" />
      <Input :style="{ width: '30%' }" value="26888888" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://ant.design" />
      <Button type="primary">Submit</Button>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="git@github.com:ant-design/ant-design.git" />
      <Tooltip title="search git url">
        <Button :icon="() => h(SearchOutlined)" />
      </Tooltip>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select value="Zhejiang">
        <Option value="Zhejiang">Zhejiang</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Xihu District, Hangzhou" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input.Search allow-clear :style="{ width: '40%' }" value="0571" />
      <Input.Search allow-clear :style="{ width: '40%' }" value="26888888" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select value="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="input content" />
      <InputNumber prefix="@" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input :style="{ width: '50%' }" value="input content" />
      <DatePicker :style="{ width: '50%' }" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input :style="{ width: '30%' }" value="input content" />
      <DatePicker.RangePicker :style="{ width: '70%' }" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select value="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <Select value="Option2-2">
        <Option value="Option2-1">Option2-1</Option>
        <Option value="Option2-2">Option2-2</Option>
      </Select>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select value="1">
        <Option value="1">Between</Option>
        <Option value="2">Except</Option>
      </Select>
      <Input :style="{ width: 100, textAlign: 'center' }" placeholder="Minimum" />
      <Input
        class="site-input-split"
        :style="{
          width: 30,
          borderInlineStart: 0,
          borderInlineEnd: 0,
          pointerEvents: 'none',
        }"
        placeholder="~"
        disabled
      />
      <Input class="site-input-right" :style="{ width: 100, textAlign: 'center' }" placeholder="Maximum" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select value="Sign Up" :style="{ width: '30%' }">
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
      <AutoComplete :style="{ width: '70%' }" placeholder="Email" :options="[{ value: 'text 1' }, { value: 'text 2' }]" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select :style="{ width: '30%' }" value="Home">
        <Option value="Home">Home</Option>
        <Option value="Company">Company</Option>
      </Select>
      <Cascader :style="{ width: '70%' }" :options="options" placeholder="Select Address" />
    </Input.Group>
  </div>
</template>
