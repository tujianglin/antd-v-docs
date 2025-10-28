<script setup lang="tsx">
import { ColorPicker, Space } from 'antd-v';
</script>

<template>
  <Space>
    <Space vertical>
      <ColorPicker value="#1677ff" size="small" />
      <ColorPicker value="#1677ff" />
      <ColorPicker value="#1677ff" size="large" />
    </Space>
    <Space vertical>
      <ColorPicker value="#1677ff" size="small" show-text />
      <ColorPicker value="#1677ff" show-text />
      <ColorPicker value="#1677ff" size="large" show-text />
    </Space>
  </Space>
</template>
