<script setup lang="tsx">
import { MehOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { Select, Space } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <Space wrap>
    <Select
      prefix="User"
      value="lucy"
      style="width: 200px"
      :options="[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]"
    />
    <Select
      :suffix-icon="() => h(SmileOutlined)"
      value="lucy"
      style="width: 120px"
      :options="[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]"
    />
    <Select
      :suffix-icon="() => h(MehOutlined)"
      value="lucy"
      style="width: 120px"
      disabled
      :options="[{ value: 'lucy', label: 'Lucy' }]"
    />
    <br />
    <Select
      prefix="User"
      :value="['lucy']"
      mode="multiple"
      style="width: 200px"
      :options="[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]"
    />
    <Select
      :suffix-icon="() => h(SmileOutlined)"
      :value="['lucy']"
      mode="multiple"
      style="width: 120px"
      :options="[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]"
    />
    <Select
      :suffix-icon="() => h(MehOutlined)"
      :value="['lucy']"
      mode="multiple"
      style="width: 120px"
      disabled
      :options="[{ value: 'lucy', label: 'Lucy' }]"
    />
  </Space>
</template>
