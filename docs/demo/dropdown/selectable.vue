<script lang="tsx" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { Dropdown, Space, Typography, type MenuProps } from 'antd-v';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];
</script>
<template>
  <Dropdown
    :menu="{
      items,
      selectable: true,
      selectedKeys: ['3'],
    }"
  >
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
</template>
