<script lang="tsx" setup>
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons-vue';
import { Segmented } from 'antd-v';
</script>
<template>
  <Segmented
    orientation="vertical"
    :options="[
      { value: 'List', icon: BarsOutlined },
      { value: 'Kanban', icon: AppstoreOutlined },
    ]"
  />
</template>
