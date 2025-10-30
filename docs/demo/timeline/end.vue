<script lang="tsx" setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { Timeline } from 'antd-v';
import {} from 'vue';
</script>
<template>
  <Timeline
    mode="end"
    :items="[
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        content: 'Solve initial network problems 2015-09-01',
      },
      {
        icon: ClockCircleOutlined,
        color: 'red',
        content: 'Technical testing 2015-09-01',
      },
      {
        content: 'Network problems being solved 2015-09-01',
      },
    ]"
  />
</template>
