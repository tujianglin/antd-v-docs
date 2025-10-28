<script setup lang="tsx">
import { Slider } from 'antd-v';
</script>

<template>
  <Slider :range="{ draggableTrack: true }" :value="[20, 50]" />
</template>
