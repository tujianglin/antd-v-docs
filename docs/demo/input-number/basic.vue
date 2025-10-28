<script setup lang="tsx">
import { InputNumber } from 'antd-v';
</script>

<template>
  <InputNumber :min="1" :max="10" :value="3" />
</template>
