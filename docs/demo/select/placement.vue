<script setup lang="tsx">
import { Radio, Select } from 'antd-v';
import { ref } from 'vue';

const RadioGroup = Radio.Group;

const placement = ref<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>('topLeft');
</script>

<template>
  <div>
    <RadioGroup
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
    <Select
      value="HangZhou"
      style="width: 200px"
      :popup-match-select-width="false"
      :placement="placement"
      :options="[
        {
          value: 'HangZhou',
          label: 'HangZhou #310000',
        },
        {
          value: 'NingBo',
          label: 'NingBo #315000',
        },
        {
          value: 'WenZhou',
          label: 'WenZhou #325000',
        },
      ]"
    />
  </div>
</template>
