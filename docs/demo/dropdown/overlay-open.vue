<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { Dropdown, Menu, type MenuProps } from 'antd-v';
import { ref } from 'vue';
const visible = ref(false);
const handleMenuClick: MenuProps['onClick'] = (e) => {
  if (e.key === '3') {
    visible.value = false;
  }
};
</script>
<template>
  <Dropdown v-model:open="visible">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <Menu @click="handleMenuClick">
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
