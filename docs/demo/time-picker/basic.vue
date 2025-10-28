<script setup lang="tsx">
import { TimePicker } from 'antd-v';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
</script>

<template>
  <TimePicker :default-open-value="dayjs('00:00:00', 'HH:mm:ss')" />
</template>
