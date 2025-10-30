<script lang="tsx" setup>
import { Button, Tooltip } from 'antd-v';
import { ref } from 'vue';
const disabled = ref(true);
</script>
<template>
  <Tooltip :title="disabled ? null : 'prompt text'">
    <Button @click="() => (disabled = !disabled)">{{ disabled ? 'Enable' : 'Disable' }}</Button>
  </Tooltip>
</template>
