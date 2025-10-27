<script lang="tsx" setup>
import { DatePicker, Flex } from 'antd-v';
import Aa from 'antd-v/locales/ar_EG';
import dayjs from 'dayjs';
import { ref } from 'vue';

const defaultValue = ref([dayjs('2000-01-01'), dayjs('2000-01-03'), dayjs('2000-01-05')]);
console.log(Aa);
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
</script>
<template>
  {{ console.log(defaultValue) }}
  <Flex vertical gap="small">
    <DatePicker multiple @change="onChange" max-tag-count="responsive" v-model:value="defaultValue" size="small" />
    <DatePicker multiple @change="onChange" max-tag-count="responsive" v-model:value="defaultValue" />
    <DatePicker multiple @change="onChange" max-tag-count="responsive" v-model:value="defaultValue" size="large" />
  </Flex>
</template>
