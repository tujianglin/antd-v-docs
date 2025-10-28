<script setup lang="tsx">
import { TimePicker } from 'antd-v';
import type { Dayjs } from 'dayjs';
import { ref } from 'vue';

const value = ref<Dayjs | null>(null);
</script>

<template>
  <TimePicker v-model:value="value" />
</template>
