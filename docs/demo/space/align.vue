<script setup lang="ts">
import { Button, Space } from 'antd-v';
</script>

<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
    <div class="space-align-block">
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
    <div class="space-align-block">
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
    <div class="space-align-block">
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span class="mock-block">Block</span>
      </Space>
    </div>
  </div>
</template>
<style scoped>
.space-align-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
