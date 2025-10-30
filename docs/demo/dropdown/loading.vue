<script lang="tsx" setup>
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { Button, Dropdown, Space, type MenuProps } from 'antd-v';
import { ref } from 'vue';
const loadings = ref<boolean[]>([]);

const items: MenuProps['items'] = [
  {
    label: 'Submit and continue',
    key: '1',
  },
];

const enterLoading = (index: number) => {
  const newLoadings = [...loadings.value];
  newLoadings[index] = true;
  loadings.value = newLoadings;

  setTimeout(() => {
    const newLoadings = [...loadings.value];
    newLoadings[index] = false;
    loadings.value = newLoadings;
  }, 6000);
};
</script>
<template>
  <Space vertical>
    <Space.Compact>
      <Button type="primary" loading> Submit </Button>
      <Dropdown :menu="{ items }">
        <Button type="primary" :icon="EllipsisOutlined" />
      </Dropdown>
    </Space.Compact>
    <Space.Compact size="small">
      <Button type="primary" loading> Submit </Button>
      <Dropdown :menu="{ items }">
        <Button type="primary" :icon="EllipsisOutlined" />
      </Dropdown>
    </Space.Compact>
    <Space.Compact>
      <Button type="primary" :loading="loadings[0]" @click="() => enterLoading(0)"> Submit </Button>
      <Dropdown :menu="{ items }">
        <Button type="primary" :icon="EllipsisOutlined" />
      </Dropdown>
    </Space.Compact>
    <Space.Compact>
      <Button :loading="loadings[1]" @click="() => enterLoading(1)"> Submit </Button>
      <Dropdown :menu="{ items }">
        <Button :icon="DownOutlined" />
      </Dropdown>
    </Space.Compact>
  </Space>
</template>
