<script lang="tsx" setup>
import { Button, Popover } from 'antd-v';
import { onMounted, ref, type CSSProperties } from 'vue';

const style: CSSProperties = {
  width: '300vw',
  height: '300vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const el = containerRef.value;
  if (el) {
    // 将容器滚动到自身宽高的一屏位置
    el.scrollTop = el.clientHeight;
    el.scrollLeft = el.clientWidth;
  }
});
</script>

<template>
  <!-- 添加一个带滚动的容器 -->
  <div ref="containerRef" style="width: 100%; height: 300px; overflow: auto; border: 1px solid #ddd">
    <div :style="style">
      <Popover content="Thanks for using antd. Have a nice day !" open>
        <Button type="primary">Scroll The Window</Button>
      </Popover>
    </div>
  </div>
</template>
