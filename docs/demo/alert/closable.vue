<script lang="tsx" setup>
import { CloseSquareOutlined } from '@ant-design/icons-vue';
import { Alert } from 'antd-v';

const onClose = (e: MouseEvent) => {
  console.log(e, 'I was closed.');
};
</script>
<template>
  <Alert
    title="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
    type="warning"
    :closable="true"
    @close="onClose"
  />
  <br />
  <Alert
    title="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    :closable="true"
    @close="onClose"
  />
  <br />
  <Alert
    title="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    @close="onClose"
    :closable="{
      'aria-label': 'close',
      closeIcon: CloseSquareOutlined,
    }"
  />
</template>
