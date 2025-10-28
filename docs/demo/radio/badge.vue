<script setup lang="tsx">
import { Badge, Radio } from 'antd-v';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
</script>

<template>
  <RadioGroup button-style="solid">
    <Badge :count="1">
      <RadioButton :value="1">Click Me</RadioButton>
    </Badge>
    <Badge :count="2">
      <RadioButton :value="2">Not Me</RadioButton>
    </Badge>
  </RadioGroup>
</template>
