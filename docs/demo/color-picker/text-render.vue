<script setup lang="tsx">
import { DownOutlined } from '@ant-design/icons-vue';
import { ColorPicker, Space } from 'antd-v';
import { h, ref } from 'vue';

const open = ref(false);

const setOpen = (val: boolean) => {
  open.value = val;
};
</script>

<template>
  <Space vertical>
    <ColorPicker value="#1677ff" show-text allow-clear />
    <ColorPicker value="#1677ff" :show-text="(color) => h('span', `Custom Text (${color.toHexString()})`)" />
    <ColorPicker
      value="#1677ff"
      :open="open"
      @open-change="setOpen"
      :show-text="() => h(DownOutlined, { rotate: open ? 180 : 0, style: { color: 'rgba(0, 0, 0, 0.25)' } })"
    />
  </Space>
</template>
