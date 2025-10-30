<script lang="tsx" setup>
import { Pagination, type PaginationProps } from 'antd-v';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
</script>
<template>
  <Pagination :total="500" :item-render="itemRender" />
</template>
