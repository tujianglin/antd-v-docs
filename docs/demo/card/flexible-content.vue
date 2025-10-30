<script lang="tsx" setup>
import { Card } from 'antd-v';
import { h } from 'vue';

const { Meta } = Card;
</script>
<template>
  <Card
    hoverable
    class="!w-[240px]"
    :cover="h('img', { draggable: false, alt: 'example', src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' })"
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
</template>
