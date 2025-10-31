<script lang="tsx" setup>
import {} from 'vue';
import { Button, Modal, Space } from 'antd-v';

const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};

const success = () => {
  Modal.success({
    content: 'some messages...some messages...',
  });
};

const error = () => {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};
</script>
<template>
  <Space wrap>
    <Button @click="info">Info</Button>
    <Button @click="success">Success</Button>
    <Button @click="error">Error</Button>
    <Button @click="warning">Warning</Button>
  </Space>
</template>
