<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { Dropdown, Menu } from 'antd-v';
</script>
<template>
  <Dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
