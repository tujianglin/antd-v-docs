<script setup lang="ts">
import { Breadcrumb } from 'antd-v';
</script>

<template>
  <Breadcrumb
    separator=""
    :items="[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
      },
      {
        title: 'An Application',
      },
    ]"
  />
</template>
