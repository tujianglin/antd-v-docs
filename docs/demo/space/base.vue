<script lang="ts" setup>
import { UploadOutlined } from '@ant-design/icons-vue';
import { Button, Popconfirm, Space, Upload } from 'antd-v';
</script>
<template>
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined />
        Click to Upload
      </Button>
    </Upload>
    <Popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
</template>
