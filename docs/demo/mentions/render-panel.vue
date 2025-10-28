<script setup lang="tsx">
import { Mentions } from 'antd-v';

const InternalMentions = Mentions._InternalPanelDoNotUseOrYouWillBeFired;

const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];
</script>

<template>
  <InternalMentions style="width: 100%" value="@" :options="options" />
</template>
