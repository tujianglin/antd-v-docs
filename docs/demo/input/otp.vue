<script setup lang="tsx">
import { Flex, Input, Typography } from 'antd-v';
import { h } from 'vue';

const { Title } = Typography;
</script>

<template>
  <Flex gap="middle" align="flex-start" vertical>
    <Title :level="5">With formatter (Upcase)</Title>
    <Input.OTP :formatter="(str) => str.toUpperCase()" />
    <Title :level="5">With Disabled</Title>
    <Input.OTP disabled />
    <Title :level="5">With Length (8)</Title>
    <Input.OTP :length="8" />
    <Title :level="5">With variant</Title>
    <Input.OTP variant="filled" />
    <Title :level="5">With custom display character</Title>
    <Input.OTP mask="🔒" />
    <Title :level="5">With custom ReactNode separator</Title>
    <Input.OTP :separator="() => h('span', '/')" />
    <Title :level="5">With custom function separator</Title>
    <Input.OTP :separator="(i) => h('span', { style: { color: i & 1 ? 'red' : 'blue' } }, '—')" />
  </Flex>
</template>
