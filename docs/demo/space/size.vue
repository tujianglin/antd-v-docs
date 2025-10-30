<script lang="ts" setup>
import { Button, Radio, Space } from 'antd-v';
import { ref } from 'vue';
const size = ref('small' as const);
</script>
<template>
  <div>
    <Radio.Group
      v-model:value="size"
      :options="[
        { label: 'Small', value: 'small' },
        { label: 'Middle', value: 'middle' },
        { label: 'Large', value: 'large' },
      ]"
    />
    <br />
    <br />
    <Space :size="size">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Space>
  </div>
</template>
