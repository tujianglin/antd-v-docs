<script setup lang="ts">
import { DatePicker, Radio } from 'antd-v';
import { ref } from 'vue';

const RangePicker = DatePicker.RangePicker;
const placement = ref<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>('topLeft');
</script>

<template>
  <div>
    <Radio.Group
      v-model:value="placement"
      :options="[
        { label: 'topLeft', value: 'topLeft' },
        { label: 'topRight', value: 'topRight' },
        { label: 'bottomLeft', value: 'bottomLeft' },
        { label: 'bottomRight', value: 'bottomRight' },
      ]"
    />
    <br />
    <br />
    <DatePicker :placement="placement" />
    <br />
    <br />
    <RangePicker :placement="placement" />
  </div>
</template>
