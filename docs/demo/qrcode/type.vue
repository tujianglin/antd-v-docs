<script lang="tsx" setup>
import { QRCode, Space } from 'antd-v';
</script>
<template>
  <Space>
    <QRCode type="canvas" value="https://ant.design/" />
    <QRCode type="svg" value="https://ant.design/" />
  </Space>
</template>
