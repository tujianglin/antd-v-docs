<script lang="tsx" setup>
import type { PaginationProps } from 'antd-v';
import { Pagination } from 'antd-v';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};
</script>
<template>
  <Pagination show-size-changer @show-size-change="onShowSizeChange" :current="3" :total="500" />
  <br />
  <Pagination show-size-changer @show-size-change="onShowSizeChange" :current="3" :total="500" disabled />
</template>
