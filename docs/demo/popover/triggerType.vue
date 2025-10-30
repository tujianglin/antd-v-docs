<script lang="tsx" setup>
import { Button, Popover, Space } from 'antd-v';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
</script>
<template>
  <Space wrap>
    <Popover :content="content" title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover :content="content" title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover :content="content" title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </Space>
</template>
