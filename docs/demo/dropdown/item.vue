<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { Dropdown, Menu } from 'antd-v';
</script>
<template>
  <Dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> 1st menu item </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"> 2nd menu item </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
