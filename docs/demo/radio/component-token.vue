<script setup lang="ts">
import { ConfigProvider, Radio, Space } from 'antd-v';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
</script>

<template>
  <ConfigProvider
    :theme="{
      components: {
        Radio: {
          radioSize: 20,
          dotSize: 10,
          dotColorDisabled: 'grey',
          buttonBg: '#f6ffed',
          buttonCheckedBg: '#d9f7be',
          buttonColor: '#faad14',
          buttonPaddingInline: 20,
          buttonCheckedBgDisabled: '#fffbe6',
          buttonCheckedColorDisabled: '#ffe58f',
          buttonSolidCheckedColor: '#ffa39e',
          wrapperMarginInlineEnd: 20,
        },
      },
    }"
  >
    <Space vertical>
      <Radio :checked="true">Test</Radio>
      <Radio :checked="true" disabled> Disabled </Radio>
      <RadioGroup value="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
      <RadioGroup value="a" disabled>
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
      <RadioGroup value="a" button-style="solid">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </Space>
  </ConfigProvider>
</template>
