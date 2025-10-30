<script lang="ts" setup>
import { Anchor } from 'antd-v';
import { onMounted, ref } from 'vue';
const targetOffset = ref<number | undefined>(undefined);
onMounted(() => {
  targetOffset.value = window.innerHeight / 2;
});
</script>

<template>
  <Anchor
    :target-offset="targetOffset"
    :items="[
      { key: 'part-1', href: '#part-1', title: 'Part 1' },
      { key: 'part-2', href: '#part-2', title: 'Part 2' },
      { key: 'part-3', href: '#part-3', title: 'Part 3' },
    ]"
  />
</template>
