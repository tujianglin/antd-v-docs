<script lang="tsx" setup>
import { Avatar, Badge } from 'antd-v';
</script>
<template>
  <a href="#">
    <Badge :count="5">
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
</template>
