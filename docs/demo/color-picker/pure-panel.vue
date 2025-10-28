<script setup lang="tsx">
import { ColorPicker } from 'antd-v';
import { ref } from 'vue';

const PureRenderColorPicker = ColorPicker._InternalPanelDoNotUseOrYouWillBeFired;

const color = ref('#1677ff');
</script>

<template>
  <div style="padding-inline-start: 100px">
    <PureRenderColorPicker v-model:value="color" />
  </div>
</template>
