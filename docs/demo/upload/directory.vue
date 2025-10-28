<script lang="tsx" setup>
import { UploadOutlined } from '@ant-design/icons-vue';
import { Button, Upload } from 'antd-v';
</script>
<template>
  <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" :webkitdirectory="true">
    <Button :icon="UploadOutlined">Upload Directory</Button>
  </Upload>
</template>
