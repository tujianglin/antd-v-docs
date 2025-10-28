<script setup lang="tsx">
import { Transfer } from 'antd-v';
import { onMounted, ref } from 'vue';

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

const mockData = ref<RecordType[]>([]);
const targetKeys = ref<string[]>([]);

const getMock = () => {
  const tempTargetKeys: string[] = [];
  const tempMockData: RecordType[] = [];
  for (let i = 0; i < 20; i++) {
    const data = {
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      chosen: i % 2 === 0,
    };
    if (data.chosen) {
      tempTargetKeys.push(data.key);
    }
    tempMockData.push(data);
  }
  mockData.value = tempMockData;
  targetKeys.value = tempTargetKeys;
};

onMounted(() => {
  getMock();
});

const filterOption = (inputValue: string, option: RecordType) => option.description.indexOf(inputValue) > -1;
</script>

<template>
  <Transfer
    :data-source="mockData"
    show-search
    :filter-option="filterOption"
    v-model:target-keys="targetKeys"
    :render="(item) => item.title"
  />
</template>
