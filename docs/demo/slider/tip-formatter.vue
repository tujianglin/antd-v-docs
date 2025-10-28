<script setup lang="tsx">
import { Slider } from 'antd-v';

const formatter = (value: number) => `${value}%`;
</script>

<template>
  <div>
    <Slider :tooltip="{ formatter }" />
    <Slider :tooltip="{ formatter: null }" />
  </div>
</template>
