<script setup lang="tsx">
import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Input, Tooltip } from 'antd-v';
import { h } from 'vue';
</script>

<template>
  <div>
    <Input
      placeholder="Enter your username"
      :prefix="() => h(UserOutlined, { style: { color: 'rgba(0,0,0,.25)' } })"
      :suffix="
        h(
          Tooltip,
          { title: 'Extra information' },
          {
            default: () => h(InfoCircleOutlined, { style: { color: 'rgba(0,0,0,.45)' } }),
          },
        )
      "
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
    <br />
    <br />
    <Input.Password :suffix="() => h(LockOutlined)" placeholder="input password support suffix" />
  </div>
</template>
