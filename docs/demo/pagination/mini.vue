<script lang="tsx" setup>
import { Pagination, type PaginationProps } from 'antd-v';
const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;
</script>
<template>
  <Pagination class="!mb-6" size="small" :total="50" />
  <Pagination class="!mb-6" size="small" :total="50" show-size-changer show-quick-jumper />
  <Pagination class="!mb-6" size="small" :total="50" :show-total="showTotal" />
  <Pagination class="!mb-6" size="small" :total="50" disabled :show-total="showTotal" show-size-changer show-quick-jumper />
</template>
