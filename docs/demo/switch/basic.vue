<script setup lang="tsx">
import { Switch } from 'antd-v';
import { ref } from 'vue';

const checked = ref(1);
</script>

<template>
  <Switch v-model:value="checked" :un-checked-value="0" :checked-value="1" />
</template>
