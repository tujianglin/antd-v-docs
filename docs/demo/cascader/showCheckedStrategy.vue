<template>
  <Cascader
    style="width: 100%"
    :options="options"
    multiple
    max-tag-count="responsive"
    :show-checked-strategy="SHOW_CHILD"
    :value="[
      ['bamboo', 'little', 'fish'],
      ['bamboo', 'little', 'cards'],
      ['bamboo', 'little', 'bird'],
    ]"
  />
  <br />
  <br />
  <Cascader
    style="width: 100%"
    :options="options"
    multiple
    max-tag-count="responsive"
    :value="[['bamboo']]"
  />
</template>

<script setup lang="tsx">
import { Cascader } from 'antd-v';

const { SHOW_CHILD } = Cascader;

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
</script>
