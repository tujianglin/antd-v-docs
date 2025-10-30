<script lang="tsx" setup>
import { Button, Tour, TourProps } from 'antd-v';
import { ref, useTemplateRef } from 'vue';
const domRef = useTemplateRef<HTMLDivElement>('domRef');

const open = ref<boolean>(false);

const steps: TourProps['steps'] = [
  {
    title: 'Center',
    description: 'Displayed in the center of screen.',
    target: null,
  },
  {
    title: 'Right',
    description: 'On the right of target.',
    placement: 'right',
    target: () => domRef.value,
  },
  {
    title: 'Top',
    description: 'On the top of target.',
    placement: 'top',
    target: () => domRef.value,
  },
];
</script>
<template>
  <Button type="primary" @click="() => (open = true)" ref="domRef"> Begin Tour </Button>

  <Tour :open="open" @close="() => (open = false)" :steps="steps" />
</template>
