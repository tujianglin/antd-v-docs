<script lang="tsx" setup>
import { Button, Drawer } from 'antd-v';
import { ref } from 'vue';

const open = ref(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
</script>
<template>
  <Button type="primary" @click="showDrawer"> Open </Button>
  <Drawer title="Drawer Closable Placement" :closable="{ placement: 'end' }" @close="onClose" :open="open">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Take a look at the top-right corner...</p>
  </Drawer>
</template>
