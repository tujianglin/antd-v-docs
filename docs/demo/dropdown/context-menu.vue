<script setup lang="ts">
import { Dropdown, Menu } from 'antd-v';
</script>

<template>
  <Dropdown :trigger="['contextmenu']">
    <div
      :style="{
        textAlign: 'center',
        background: '#f7f7f7',
        height: '200px',
        lineHeight: '200px',
        color: '#777',
      }"
    >
      Right Click on here
    </div>
    <template #overlay>
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
