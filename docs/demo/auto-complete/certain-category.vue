<script setup lang="tsx">
import { UserOutlined } from '@ant-design/icons-vue';
import { AutoComplete, Flex, Input } from 'antd-v';
import { computed } from 'vue';

interface TitleProps {
  title?: string;
}

const Title = (props: TitleProps) => (
  <Flex align="center" justify="space-between">
    {props.title}
    <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
      more
    </a>
  </Flex>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <Flex align="center" justify="space-between">
      {title}
      <span>
        <UserOutlined></UserOutlined>
        {count}
      </span>
    </Flex>
  ),
});

const options = computed(() => [
  {
    label: <Title title="Libraries"></Title>,
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: <Title title="Solutions"></Title>,
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: <Title title="Articles"></Title>,
    options: [renderItem('AntDesign design language', 100000)],
  },
]);
</script>

<template>
  <AutoComplete
    :class-names="{
      popup: {
        root: 'certain-category-search-dropdown',
      },
    }"
    :popup-match-select-width="500"
    :style="{ width: '250px' }"
    :options="options"
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
</template>

<style scoped>
.certain-category-search-dropdown :deep(.ant-popover-inner-content) {
  padding: 12px;
}
</style>
