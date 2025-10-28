<script setup lang="tsx">
import { Input } from 'antd-v';

const { Search } = Input;
</script>

<template>
  <div>
    <Search placeholder="input search loading default" loading />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enter-button />
    <br />
    <br />
    <Search placeholder="input search text" enter-button="Search" size="large" loading />
  </div>
</template>
