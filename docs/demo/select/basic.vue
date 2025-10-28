<script setup lang="tsx">
import { Select, Space } from 'antd-v';
</script>

<template>
  <Space wrap>
    <Select
      value="lucy"
      style="width: 120px"
      :options="[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]"
    />
    <Select value="lucy" style="width: 120px" disabled :options="[{ value: 'lucy', label: 'Lucy' }]" />
    <Select value="lucy" style="width: 120px" loading :options="[{ value: 'lucy', label: 'Lucy' }]" />
    <Select value="lucy" style="width: 120px" allow-clear :options="[{ value: 'lucy', label: 'Lucy' }]" placeholder="select it" />
  </Space>
</template>
