<script setup lang="tsx">
import { Slider } from 'antd-v';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};
</script>

<template>
  <div>
    <h4>included=true</h4>
    <Slider :marks="marks" :value="37" />
    <Slider range :marks="marks" :value="[26, 37]" />

    <h4>included=false</h4>
    <Slider :marks="marks" :included="false" :value="37" />

    <h4>marks & step</h4>
    <Slider :marks="marks" :step="10" :value="37" />

    <h4>step=null</h4>
    <Slider :marks="marks" :step="null" :value="37" />
  </div>
</template>
