<script setup lang="tsx">
import { TimePicker } from 'antd-v';

const InternalTimePicker = TimePicker._InternalPanelDoNotUseOrYouWillBeFired;
</script>

<template>
  <InternalTimePicker />
</template>
