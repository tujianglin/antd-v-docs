<script setup lang="tsx">
import { FrownOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { Slider } from 'antd-v';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{ max?: number; min?: number }>(), {
  min: 0,
  max: 20,
});

const value = ref(0);

const mid = computed(() => Number(((props.max - props.min) / 2).toFixed(5)));
const preColorCls = computed(() => (value.value >= mid.value ? '' : 'icon-wrapper-active'));
const nextColorCls = computed(() => (value.value >= mid.value ? 'icon-wrapper-active' : ''));
</script>

<template>
  <div class="icon-wrapper">
    <FrownOutlined :class="preColorCls" />
    <Slider v-bind="props" v-model:value="value" />
    <SmileOutlined :class="nextColorCls" />
  </div>
</template>
<style>
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-slider {
    width: 100%;
  }
}
</style>
