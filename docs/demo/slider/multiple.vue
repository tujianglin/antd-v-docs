<script setup lang="tsx">
import { Slider } from 'antd-v';
import { computed, ref } from 'vue';

function getGradientColor(percentage: number) {
  const startColor = [135, 208, 104];
  const endColor = [255, 204, 199];

  const midColor = startColor.map((start, i) => {
    const end = endColor[i];
    const delta = end - start;
    return (start + delta * percentage).toFixed(0);
  });

  return `rgb(${midColor.join(',')})`;
}

const value = ref([0, 10, 20]);

const start = computed(() => value.value[0] / 100);
const end = computed(() => value.value[value.value.length - 1] / 100);
</script>

<template>
  <Slider
    range
    :value="value"
    :styles="{
      track: {
        background: 'transparent',
      },
      tracks: {
        background: `linear-gradient(to right, ${getGradientColor(start)} 0%, ${getGradientColor(end)} 100%)`,
      },
    }"
  />
</template>
