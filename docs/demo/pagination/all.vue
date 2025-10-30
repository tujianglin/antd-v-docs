<script lang="tsx" setup>
import { Pagination } from 'antd-v';
</script>
<template>
  <Pagination :total="30" show-size-changer show-quick-jumper :show-total="(total) => `Total ${total} items`" />
</template>
