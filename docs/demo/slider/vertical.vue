<script setup lang="tsx">
import { Slider } from 'antd-v';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: { color: '#f50' },
    label: <strong>100°C</strong>,
  },
};
</script>

<template>
  <div>
    <div style="display: inline-block; height: 300px; margin-inline-start: 70px">
      <Slider vertical :value="30" />
    </div>
    <div style="display: inline-block; height: 300px; margin-inline-start: 70px">
      <Slider vertical range :step="10" :value="[20, 50]" />
    </div>
    <div style="display: inline-block; height: 300px; margin-inline-start: 70px">
      <Slider vertical range :marks="marks" :value="[26, 37]" />
    </div>
  </div>
</template>
