<script setup lang="tsx">
import { Radio } from 'antd-v';
import { ref } from 'vue';

const RadioGroup = Radio.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple', class: 'label-1' },
  { label: 'Pear', value: 'Pear', class: 'label-2' },
  { label: 'Orange', value: 'Orange', title: 'Orange', class: 'label-3' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple', class: 'label-1' },
  { label: 'Pear', value: 'Pear', class: 'label-2' },
  { label: 'Orange', value: 'Orange', class: 'label-3', disabled: true },
];

const value1 = ref('Apple');
const value2 = ref('Apple');
const value3 = ref('Apple');
const value4 = ref('Apple');
</script>

<template>
  <div>
    <RadioGroup :options="plainOptions" v-model:value="value1" />
    <br />
    <RadioGroup :options="optionsWithDisabled" v-model:value="value2" />
    <br />
    <br />
    <RadioGroup :options="options" v-model:value="value3" option-type="button" />
    <br />
    <br />
    <RadioGroup :options="optionsWithDisabled" v-model:value="value4" option-type="button" button-style="solid" />
  </div>
</template>
