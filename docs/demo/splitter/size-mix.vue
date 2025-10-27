<script setup lang="tsx">
import { Flex, Radio, Splitter, Typography } from 'antd-v';
import { computed, ref } from 'vue';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const Desc = (props) => (
  <Flex justify="center" align="center" class="h-full">
    <Typography.Title type="secondary" level={5} class="whitespace-nowrap">
      {props.text}
    </Typography.Title>
  </Flex>
);

const SIZE_BUCKETS_1 = [
  {
    defaultSize: 100,
    min: 100,
    max: 200,
  },
  {
    min: 100,
    max: 200,
  },
  {
    min: '20%',
  },
];

const SIZE_BUCKETS_2 = [
  {
    min: 300,
  },
  {
    min: 100,
    max: 200,
  },
  {
    min: 600,
  },
];

const sizeBucket = ref(1);

const SIZE_BUCKETS = computed(() => (sizeBucket.value === 1 ? SIZE_BUCKETS_1 : SIZE_BUCKETS_2));

const setSizeBucket = (value: number) => {
  sizeBucket.value = value;
};
</script>

<template>
  <div>
    <RadioGroup @change="(e) => setSizeBucket(e.target.value)" :model-value="sizeBucket" style="margin-bottom: 16px">
      <RadioButton :value="1">Size Bucket 1</RadioButton>
      <RadioButton :value="2">Size Bucket 2</RadioButton>
    </RadioGroup>
    <Splitter
      :key="sizeBucket"
      :style="{
        height: '300px',
        width: '1000px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }"
    >
      <Splitter.Panel v-bind="SIZE_BUCKETS[0]">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel v-bind="SIZE_BUCKETS[1]">
        <Desc text="Second" />
      </Splitter.Panel>
      <Splitter.Panel v-bind="SIZE_BUCKETS[2]">
        <Desc text="Third" />
      </Splitter.Panel>
    </Splitter>
  </div>
</template>
