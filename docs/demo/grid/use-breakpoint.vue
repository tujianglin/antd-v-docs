<script lang="ts" setup>
import { Grid, Tag } from 'antd-v';

const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();
</script>
<template>
  Current break point:
  <template v-for="(value, key) in screens">
    <Tag v-if="!!value" :key="key" color="blue">
      {{ key }}
    </Tag>
  </template>
</template>
