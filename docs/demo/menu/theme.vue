<script lang="tsx" setup>
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps, MenuTheme } from 'antd-v';
import { Menu, Switch } from 'antd-v';
import { ref } from 'vue';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: '1-2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];

const theme = ref<MenuTheme>('dark');
const current = ref(['1']);

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click ', e);
};
</script>
<template>
  <Switch
    v-model:value="theme"
    un-checked-value="light"
    checked-value="dark"
    checked-children="Dark"
    un-checked-children="Light"
  />
  <br />
  <br />
  <Menu
    :default-open-keys="['sub1']"
    :theme="theme"
    @click="onClick"
    :style="{ width: '256px' }"
    v-model:selected-keys="current"
    mode="vertical"
    :items="items"
  />
</template>
