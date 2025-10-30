<script lang="tsx" setup>
import type { PaginationProps } from 'antd-v';
import { Pagination } from 'antd-v';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};
</script>
<template>
  <Pagination show-quick-jumper @show-size-change="onShowSizeChange" :current="2" :total="500" />
  <br />
  <Pagination show-quick-jumper @show-size-change="onShowSizeChange" :current="2" :total="500" disabled />
</template>
