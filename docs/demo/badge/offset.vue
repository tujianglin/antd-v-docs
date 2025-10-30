<script lang="tsx" setup>
import { Avatar, Badge } from 'antd-v';
</script>
<template>
  <Badge :count="5" :offset="[10, 10]">
    <Avatar shape="square" size="large" />
  </Badge>
</template>
