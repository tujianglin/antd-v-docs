<script lang="tsx" setup>
import { Button, Flex } from 'antd-v';
</script>
<template>
  <Flex wrap gap="small" class="site-button-ghost-wrapper">
    <Button type="primary" ghost> Primary </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost> Dashed </Button>
    <Button type="primary" danger ghost> Danger </Button>
  </Flex>
</template>
<style>
.site-button-ghost-wrapper {
  padding: 16px;
  background: rgb(190, 200, 200);
}
</style>
