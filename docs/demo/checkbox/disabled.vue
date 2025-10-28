<script setup lang="ts">
import { Checkbox } from 'antd-v';
</script>

<template>
  <div>
    <Checkbox :checked="false" :disabled="true" />
    <br />
    <Checkbox :indeterminate="true" :disabled="true" />
    <br />
    <Checkbox :checked="true" :disabled="true" />
  </div>
</template>
