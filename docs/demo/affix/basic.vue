<script lang="tsx" setup>
import { Affix, Button } from 'antd-v';
import { ref } from 'vue';

const top = ref<number>(100);
const bottom = ref<number>(100);
</script>
<template>
  <Affix :offset-top="top">
    <Button type="primary" @click="() => (top = top + 10)"> Affix top </Button>
  </Affix>
  <br />
  <Affix :offset-bottom="bottom">
    <Button type="primary" @click="() => (bottom = bottom + 10)"> Affix bottom </Button>
  </Affix>
</template>
