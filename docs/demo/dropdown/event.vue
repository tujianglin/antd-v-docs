<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { Dropdown, Menu, type MenuProps } from 'antd-v';

const onClick: MenuProps['onClick'] = ({ key }) => {
  console.log(`Click on item ${key}`);
};
</script>
<template>
  <Dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me, Click menu item
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu @click="onClick">
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
