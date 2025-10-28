<template>
  <div>
    <InputNumber :min="1" :max="10" :disabled="disabled" :value="3" />
    <div style="margin-top: 20px">
      <Button @click="toggle" type="primary">
        Toggle disabled
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, InputNumber } from 'antd-v';

const disabled = ref(true);

const toggle = () => {
  disabled.value = !disabled.value;
};
</script>
