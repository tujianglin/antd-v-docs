<script lang="ts" setup>
import { Anchor } from 'antd-v';
</script>

<template>
  <Anchor
    :items="[
      {
        key: 'part-1',
        href: '#part-1',
        title: 'Part 1',
      },
      {
        key: 'part-2',
        href: '#part-2',
        title: 'Part 2',
      },
      {
        key: 'part-3',
        href: '#part-3',
        title: 'Part 3',
      },
    ]"
  />
</template>
