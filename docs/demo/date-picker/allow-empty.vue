<script lang="tsx" setup>
import { DatePicker } from 'antd-v';
</script>
<template>
  <DatePicker.RangePicker
    :placeholder="['Start Date', 'Till Now']"
    :allow-empty="[false, true]"
    @change="
      (date, dateString) => {
        console.log(date, dateString);
      }
    "
  />
</template>
