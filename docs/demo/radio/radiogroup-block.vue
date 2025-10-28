<script setup lang="tsx">
import { Flex, Radio } from 'antd-v';

const RadioGroup = Radio.Group;

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
</script>

<template>
  <Flex vertical gap="middle">
    <RadioGroup block :options="options" value="Apple" />
    <RadioGroup block :options="options" value="Apple" option-type="button" button-style="solid" />
    <RadioGroup block :options="options" value="Pear" option-type="button" />
  </Flex>
</template>
