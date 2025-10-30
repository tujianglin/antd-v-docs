<script lang="tsx" setup>
import { Radio, Timeline } from 'antd-v';
import { ref } from 'vue';
const mode = ref<'start' | 'alternate' | 'end'>('start');
</script>
<template>
  <Radio.Group
    v-model:value="mode"
    :style="{
      marginBottom: '20px',
    }"
    :options="[
      { label: 'Start', value: 'start' },
      { label: 'End', value: 'end' },
      { label: 'Alternate', value: 'alternate' },
    ]"
  />
  <Timeline
    :mode="mode"
    :items="[
      {
        title: '2015-09-01',
        content: 'Create a services',
      },
      {
        title: '2015-09-01 09:12:11',
        content: 'Solve initial network problems',
      },
      {
        content: 'Technical testing',
      },
      {
        title: '2015-09-01 09:12:11',
        content: 'Network problems being solved',
      },
    ]"
  />
</template>
