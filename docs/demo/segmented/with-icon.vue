<script lang="tsx" setup>
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons-vue';
import { Segmented } from 'antd-v';
import {} from 'vue';
</script>
<template>
  <Segmented
    :options="[
      { label: 'List', value: 'List', icon: BarsOutlined },
      { label: 'Kanban', value: 'Kanban', icon: AppstoreOutlined },
    ]"
  />
</template>
