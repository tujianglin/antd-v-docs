<script lang="tsx" setup>
import { Pagination } from 'antd-v';
</script>
<template>
  <Pagination :show-total="(total) => `Total ${total} items`" :current="2" :page-size="20" :total="85" />
  <br />
  <Pagination
    :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
    :current="2"
    :page-size="20"
    :total="85"
  />
</template>
