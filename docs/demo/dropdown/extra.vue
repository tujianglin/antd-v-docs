<script lang="tsx" setup>
import { DownOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'antd-v';
import { Dropdown, Space } from 'antd-v';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];
</script>
<template>
  <Dropdown :menu="{ items }">
    <a @click="(e) => e.preventDefault()">
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
</template>
