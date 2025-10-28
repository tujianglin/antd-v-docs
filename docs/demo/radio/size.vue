<script setup lang="tsx">
import { Flex, Radio } from 'antd-v';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
</script>

<template>
  <Flex vertical gap="middle">
    <RadioGroup value="a" size="large">
      <RadioButton value="a">Hangzhou</RadioButton>
      <RadioButton value="b">Shanghai</RadioButton>
      <RadioButton value="c">Beijing</RadioButton>
      <RadioButton value="d">Chengdu</RadioButton>
    </RadioGroup>
    <RadioGroup value="a">
      <RadioButton value="a">Hangzhou</RadioButton>
      <RadioButton value="b">Shanghai</RadioButton>
      <RadioButton value="c">Beijing</RadioButton>
      <RadioButton value="d">Chengdu</RadioButton>
    </RadioGroup>
    <RadioGroup value="a" size="small">
      <RadioButton value="a">Hangzhou</RadioButton>
      <RadioButton value="b">Shanghai</RadioButton>
      <RadioButton value="c">Beijing</RadioButton>
      <RadioButton value="d">Chengdu</RadioButton>
    </RadioGroup>
  </Flex>
</template>
