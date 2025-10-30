<script lang="tsx" setup>
import { Calendar } from 'antd-v';
</script>
<template>
  <Calendar fullscreen show-week />
  <br />
  <Calendar :fullscreen="false" show-week />
</template>
