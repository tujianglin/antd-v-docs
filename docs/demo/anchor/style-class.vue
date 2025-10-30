<script lang="tsx" setup>
import type { AnchorProps } from 'antd-v';
import { Anchor } from 'antd-v';

const classNamesObject: AnchorProps['classNames'] = {
  root: 'demo-anchor-root',
  item: 'demo-anchor-item',
  title: 'demo-anchor-title',
  indicator: 'demo-anchor-indicator',
};

const stylesFn: AnchorProps['styles'] = (info) => {
  if (info.props.direction === 'vertical') {
    return { root: { backgroundColor: '#fffbe6' } };
  }
  return {};
};

const items: NonNullable<AnchorProps['items']> = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];
</script>
<template>
  <Anchor replace :items="items" :styles="stylesFn" :class-names="classNamesObject" />
</template>
