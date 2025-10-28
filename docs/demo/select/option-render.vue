<script setup lang="tsx">
import { Select, Space } from 'antd-v';

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

const optionRender = (option) => {
  return (
    <Space>
      <span role="img" aria-label={option.data.label}>
        {option.data.emoji}
      </span>
      {option.data.desc}
    </Space>
  );
};
</script>

<template>
  <Select
    mode="multiple"
    style="width: 100%"
    placeholder="select one country"
    :value="['china']"
    :options="options"
    :option-render="optionRender"
  />
</template>
