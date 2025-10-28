<script setup lang="tsx">
import { SearchOutlined } from '@ant-design/icons-vue';
import { Button, Input, Select, Space } from 'antd-v';
import { h } from 'vue';

const { Search } = Input;
const SpaceCompact = Space.Compact;

const options = [
  { value: 'zhejiang', label: 'Zhejiang' },
  { value: 'jiangsu', label: 'Jiangsu' },
];
</script>

<template>
  <Space vertical size="middle">
    <SpaceCompact>
      <Input value="26888888" />
    </SpaceCompact>
    <SpaceCompact>
      <Input :style="{ width: '20%' }" value="0571" />
      <Input :style="{ width: '80%' }" value="26888888" />
    </SpaceCompact>
    <SpaceCompact>
      <Search addon-before="https://" placeholder="input search text" allow-clear />
    </SpaceCompact>
    <SpaceCompact :style="{ width: '100%' }">
      <Input value="Combine input and button" />
      <Button type="primary">Submit</Button>
    </SpaceCompact>
    <SpaceCompact>
      <Select value="Zhejiang" :options="options" />
      <Input value="Xihu District, Hangzhou" />
    </SpaceCompact>
    <SpaceCompact size="large">
      <Input :addon-before="() => h(SearchOutlined)" placeholder="large size" />
      <Input placeholder="another input" />
    </SpaceCompact>
  </Space>
</template>
