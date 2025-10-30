<script lang="tsx" setup>
import { Alert, Calendar } from 'antd-v';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { ref } from 'vue';

const value = ref(dayjs('2017-01-25'));
const selectedValue = ref(dayjs('2017-01-25'));

const onSelect = (newValue: Dayjs) => {
  value.value = newValue;
  selectedValue.value = newValue;
};

const onPanelChange = (newValue: Dayjs) => {
  value.value = newValue;
};
</script>
<template>
  <Alert :title="`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`" />
  <Calendar :value="value" @select="onSelect" @panel-change="onPanelChange" />
</template>
