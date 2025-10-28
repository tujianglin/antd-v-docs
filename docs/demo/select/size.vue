<script setup lang="tsx">
import { Radio, Select, Space } from 'antd-v';
import { ref } from 'vue';

const RadioGroup = Radio.Group;

const options: any[] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const size = ref<'small' | 'middle' | 'large'>('middle');
</script>

<template>
  <div>
    <RadioGroup
      v-model:value="size"
      :options="[
        { label: 'Large', value: 'large' },
        { label: 'Default', value: 'middle' },
        { label: 'Small', value: 'small' },
      ]"
    />
    <br />
    <br />
    <Space vertical style="width: 100%">
      <Select :size="size" value="a1" style="width: 200px" :options="options" />
      <Select
        mode="multiple"
        :size="size"
        placeholder="Please select"
        :value="['a10', 'c12']"
        style="width: 100%"
        :options="options"
      />
      <Select
        mode="tags"
        :size="size"
        placeholder="Please select"
        :value="['a10', 'c12']"
        style="width: 100%"
        :options="options"
      />
    </Space>
  </div>
</template>
