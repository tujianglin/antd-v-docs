<script lang="tsx" setup>
import { Button, Popover } from 'antd-v';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
</script>
<template>
  <Popover :content="content" title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
</template>
