<script setup lang="ts">
import { InputNumber } from 'antd-v';
</script>

<template>
  <InputNumber :min="1" :max="10" :value="3" change-on-wheel />
</template>
