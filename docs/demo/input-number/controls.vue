<script setup lang="ts">
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons-vue';
import { InputNumber } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <InputNumber :controls="{ upIcon: () => h(ArrowUpOutlined), downIcon: () => h(ArrowDownOutlined) }" />
</template>
