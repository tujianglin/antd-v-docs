<script setup lang="tsx">
import { Slider } from 'antd-v';
</script>

<template>
  <div>
    <Slider :value="30" />
    <Slider range :step="10" :value="[20, 50]" />
  </div>
</template>
