<script setup lang="tsx">
import { Switch } from 'antd-v';
</script>

<template>
  <div>
    <Switch loading :value="true" />
    <br />
    <Switch size="small" loading />
  </div>
</template>
