<script lang="tsx" setup>
import { Button, ConfigProvider, Flex, Tooltip, Segmented, type PopoverProps } from 'antd-v';
import { computed, ref } from 'vue';

const text = <span>Title</span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 80;

const arrow = ref<'Show' | 'Hide' | 'Center'>('Show');

const mergedArrow = computed<PopoverProps['arrow']>(() => {
  if (arrow.value === 'Hide') {
    return false;
  }

  if (arrow.value === 'Show') {
    return true;
  }

  return {
    pointAtCenter: true,
  };
});
</script>
<template>
  <ConfigProvider :button="{ style: { width: buttonWidth, margin: `${4}px` } }">
    <Segmented :options="['Show', 'Hide', 'Center']" v-model:value="arrow" :style="{ marginBottom: '24px' }" />
    <Flex vertical justify="center" align="center" class="demo">
      <Flex justify="center" align="center" :style="{ whiteSpace: 'nowrap' }">
        <Tooltip placement="topLeft" :title="text" :content="content" :arrow="mergedArrow">
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" :title="text" :content="content" :arrow="mergedArrow">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" :title="text" :content="content" :arrow="mergedArrow">
          <Button>TR</Button>
        </Tooltip>
      </Flex>
      <Flex :style="{ width: `${buttonWidth * 5 + 32}px` }" justify="space-between" align="center">
        <Flex align="center" vertical>
          <Tooltip placement="leftTop" :title="text" :content="content" :arrow="mergedArrow">
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" :title="text" :content="content" :arrow="mergedArrow">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" :title="text" :content="content" :arrow="mergedArrow">
            <Button>LB</Button>
          </Tooltip>
        </Flex>
        <Flex align="center" vertical>
          <Tooltip placement="rightTop" :title="text" :content="content" :arrow="mergedArrow">
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" :title="text" :content="content" :arrow="mergedArrow">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" :title="text" :content="content" :arrow="mergedArrow">
            <Button>RB</Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" :style="{ whiteSpace: 'nowrap' }">
        <Tooltip placement="bottomLeft" :title="text" :content="content" :arrow="mergedArrow">
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" :title="text" :content="content" :arrow="mergedArrow">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" :title="text" :content="content" :arrow="mergedArrow">
          <Button>BR</Button>
        </Tooltip>
      </Flex>
    </Flex>
  </ConfigProvider>
</template>
