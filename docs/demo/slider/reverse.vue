<script setup lang="tsx">
import { Slider, Switch } from 'antd-v';
import { ref } from 'vue';

const reverse = ref(true);
</script>

<template>
  <div>
    <Slider :value="30" :reverse="reverse" />
    <Slider range :value="[20, 50]" :reverse="reverse" />
    Reversed: <Switch size="small" v-model:value="reverse" />
  </div>
</template>
