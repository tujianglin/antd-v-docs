<script setup lang="tsx">
import { InputNumber } from 'antd-v';
</script>

<template>
  <InputNumber :style="{ width: '200px' }" value="1" min="0" max="10" step="0.00000000000001" string-mode />
</template>
