<script setup lang="tsx">
import { generate, green, presetPalettes, red } from '@ant-design/colors';
import { ColorPicker } from 'antd-v';

function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map(([label, colors]) => ({ label, colors, key: label }));
}

const presets = genPresets({ primary: generate('#1677ff'), red, green });
</script>

<template>
  <ColorPicker :presets="presets" value="#1677ff" />
</template>
