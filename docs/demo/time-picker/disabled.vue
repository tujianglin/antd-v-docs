<script setup lang="tsx">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
</script>

<template>
  <TimePicker :value="dayjs('12:08:23', 'HH:mm:ss')" disabled />
</template>
