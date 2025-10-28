<script setup lang="ts">
import { InputNumber } from 'antd-v';

const InternalInputNumber = InputNumber._InternalPanelDoNotUseOrYouWillBeFired;
</script>

<template>
  <div style="display: flex; flex-direction: column; row-gap: 16px">
    <InternalInputNumber style="width: 100%" />
  </div>
</template>
