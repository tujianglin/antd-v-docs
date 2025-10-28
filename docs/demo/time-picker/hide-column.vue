<script setup lang="tsx">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';

const format = 'HH:mm';
</script>

<template>
  <TimePicker :value="dayjs('12:08', format)" :format="format" />
</template>
