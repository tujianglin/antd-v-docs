<script setup lang="tsx">
import { ConfigProvider, Mentions } from 'antd-v';

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
  <ConfigProvider
    :theme="{
      components: { Mentions: { dropdownHeight: 500, controlItemWidth: 300, zIndexPopup: 1000 } },
    }"
  >
    <InternalMentions style="width: 100%" value="@" :options="options" />
  </ConfigProvider>
</template>
