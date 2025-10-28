<script setup lang="tsx">
import { Transfer } from 'antd-v';
import { ref } from 'vue';

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const targetKeys = ref(initialTargetKeys);
const selectedKeys = ref<string[]>([]);
</script>

<template>
  <Transfer
    :data-source="mockData"
    :titles="['Source', 'Target']"
    v-model:target-keys="targetKeys"
    v-model:selected-keys="selectedKeys"
    :render="(item) => item.title"
  />
</template>
