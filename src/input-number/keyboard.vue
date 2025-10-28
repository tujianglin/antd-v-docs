<script setup lang="ts">
import { Checkbox, InputNumber, Space } from 'antd-v';
import { ref } from 'vue';

const keyboard = ref(true);
</script>

<template>
  <Space>
    <InputNumber :min="1" :max="10" :keyboard="keyboard" :value="3" />
    <Checkbox v-model:checked="keyboard"> Toggle keyboard </Checkbox>
  </Space>
</template>
