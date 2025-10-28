<script setup lang="tsx">
import { Mentions } from 'antd-v';
</script>

<template>
  <Mentions
    style="width: 100%"
    placement="top"
    :options="[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]"
  />
</template>
