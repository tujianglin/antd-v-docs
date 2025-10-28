<script setup lang="tsx">
import { Checkbox } from 'antd-v';
import { effect, ref } from 'vue';

const checked = ref(true);

effect(() => {
  console.log(checked.value);
});
</script>

<template>
  <Checkbox v-model:checked="checked">Checkbox</Checkbox>
</template>
