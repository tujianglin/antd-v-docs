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
        <Menu.Item>
          <a href="javascript:;">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript:;">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a href="javascript:;">3rd menu item</a>
        </Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
