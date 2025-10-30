<script lang="tsx" setup>
import { MailOutlined } from '@ant-design/icons-vue';
import type { MenuProps, MenuTheme } from 'antd-v';
import { Menu, Switch } from 'antd-v';
import { h, ref } from 'vue';

const menuTheme = ref<MenuTheme>('light');
const current = ref(['1']);

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click ', e);
};
</script>
<template>
  <Switch
    v-model:value="menuTheme"
    un-checked-value="light"
    checked-value="dark"
    checked-children="Dark"
    un-checked-children="Light"
  />
  <br />
  <br />
  <Menu
    theme="dark"
    @click="onClick"
    :style="{ width: '256px' }"
    :default-open-keys="['sub1']"
    v-model:selected-keys="current"
    mode="vertical"
    :items="[
      {
        key: 'sub1',
        icon: h(MailOutlined),
        label: 'Navigation One',
        theme: menuTheme,
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
          { key: '3', label: 'Option 3' },
        ],
      },
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
    ]"
    :get-popup-container="(node) => node.parentNode as HTMLElement"
  />
</template>
