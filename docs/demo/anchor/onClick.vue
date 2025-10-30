<script lang="ts" setup>
import type { AnchorProps } from 'antd-v';
import { Anchor } from 'antd-v';
const handleClick: AnchorProps['onClick'] = (e, link) => {
  e.preventDefault();
  console.log(link);
};
</script>

<template>
  <Anchor
    :affix="false"
    :items="[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]"
    @click="handleClick"
  />
</template>
