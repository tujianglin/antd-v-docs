<script setup lang="tsx">
import { ConfigProvider, Slider } from 'antd-v';

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
  <ConfigProvider
    :theme="{
      components: {
        Slider: {
          controlSize: 20,
          railSize: 4,
          handleSize: 22,
          handleSizeHover: 18,
          dotSize: 8,
          handleLineWidth: 6,
          handleLineWidthHover: 2,
          railBg: '#9f3434',
          railHoverBg: '#8d2424',
          trackBg: '#b0b0ef',
          trackHoverBg: '#c77195',
          handleColor: '#e6f6a2',
          handleActiveColor: '#d22bc4',
          dotBorderColor: '#303030',
          dotActiveBorderColor: '#918542',
          trackBgDisabled: '#1a1b80',
        },
      },
    }"
  >
    <Slider :value="30" disabled />
    <Slider :range="{ draggableTrack: true }" :value="[20, 50]" />
    <div style="display: inline-block; height: 300px; margin-inline-start: 70px">
      <Slider vertical :value="30" />
    </div>
    <div style="display: inline-block; height: 300px; margin-inline-start: 70px">
      <Slider vertical range :step="10" :value="[20, 50]" />
    </div>
    <div style="display: inline-block; height: 300px; margin-inline-start: 70px">
      <Slider vertical range :marks="marks" :value="[26, 37]" />
    </div>
  </ConfigProvider>
</template>
