<script setup lang="tsx">
import { Slider, Switch } from 'antd-v';
import { ref } from 'vue';

const disabled = ref(false);
</script>

<template>
  <div>
    <Slider :value="30" :disabled="disabled" />
    <Slider :range="true" :value="[20, 50]" :disabled="disabled" />
    Disabled: <Switch size="small" v-model:checked="disabled" />
  </div>
</template>
