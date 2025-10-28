<script setup lang="tsx">
import { ColorPicker, Space } from 'antd-v';
import { computed, ref } from 'vue';

const colorHex = ref<any>('#1677ff');
const formatHex = ref<any>('hex');
const hexString = computed(() => (typeof colorHex.value === 'string' ? colorHex.value : colorHex.value?.toHexString()));

const colorHsb = ref<any>('hsb(215, 91%, 100%)');
const formatHsb = ref<any>('hsb');
const hsbString = computed(() => (typeof colorHsb.value === 'string' ? colorHsb.value : colorHsb.value?.toHsbString()));

const colorRgb = ref<any>('rgb(22, 119, 255)');
const formatRgb = ref<any>('rgb');
const rgbString = computed(() => (typeof colorRgb.value === 'string' ? colorRgb.value : colorRgb.value?.toRgbString()));
</script>

<template>
  <Space vertical size="middle" style="display: flex">
    <Space>
      <ColorPicker :format="formatHex" v-model:value="colorHex" />
      <span>HEX: {{ hexString }}</span>
    </Space>
    <Space>
      <ColorPicker :format="formatHsb" v-model:value="colorHsb" />
      <span>HSB: {{ hsbString }}</span>
    </Space>
    <Space>
      <ColorPicker :format="formatRgb" v-model:value="colorRgb" />
      <span>RGB: {{ rgbString }}</span>
    </Space>
  </Space>
</template>
