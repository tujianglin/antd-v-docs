<script setup lang="tsx">
import { computed, ref } from 'vue';
import { Input, Radio } from 'antd-v';

const RadioGroup = Radio.Group;

const value = ref(1);

const options = computed(() => [
  { value: 1, label: 'Option A' },
  { value: 2, label: 'Option B' },
  { value: 3, label: 'Option C' },
  {
    value: 4,
    label: (
      <>
        More...
        {value.value === 4 && (
          <Input variant="filled" placeholder="please input" style={{ width: '120px', marginInlineStart: `${12}px` }} />
        )}
      </>
    ),
  },
]);
</script>

<template>
  <RadioGroup vertical v-model:value="value" :options="options" />
</template>
