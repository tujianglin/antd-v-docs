<script setup lang="tsx">
import { Checkbox } from 'antd-v';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];

interface OptionType {
  label: string;
  value: string;
  class?: string;
  disabled?: boolean;
}

const options: OptionType[] = [
  { label: 'Apple', value: 'Apple', class: 'label-1' },
  { label: 'Pear', value: 'Pear', class: 'label-2' },
  { label: 'Orange', value: 'Orange', class: 'label-3' },
];

const optionsWithDisabled: OptionType[] = [
  { label: 'Apple', value: 'Apple', class: 'label-1' },
  { label: 'Pear', value: 'Pear', class: 'label-2' },
  { label: 'Orange', value: 'Orange', class: 'label-3', disabled: false },
];
</script>

<template>
  <div>
    <CheckboxGroup :options="plainOptions" :value="['Apple']" />
    <br />
    <br />
    <CheckboxGroup :options="options" :value="['Pear']" />
    <br />
    <br />
    <CheckboxGroup :options="optionsWithDisabled" :disabled="true" :value="['Apple']" />
  </div>
</template>
