<script setup lang="ts">
import { Checkbox, Popover } from 'antd-v';
</script>

<template>
  <div style="padding: 56px">
    <Popover content="xxxx" trigger="hover">
      <Checkbox :disabled="true" :checked="true" />
    </Popover>
  </div>
</template>
