<script setup lang="ts">
import { Breadcrumb } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <Breadcrumb
    separator=">"
    :items="[
      { title: 'Home' },
      { title: h('a', { href: '' }, 'Application List') },
      { title: h('a', { href: '' }, 'An Application') },
      { title: 'Another Application' },
    ]"
  />
</template>
