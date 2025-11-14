<script setup lang="tsx">
import { Switch, Transfer } from 'antd-v';
import { onMounted, ref } from 'vue';

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

const oneWay = ref(false);
const mockData = ref<RecordType[]>([]);
const targetKeys = ref<string[]>([]);

onMounted(() => {
  const newTargetKeys: string[] = [];
  const newMockData: RecordType[] = [];
  for (let i = 0; i < 2000; i++) {
    const data = {
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      chosen: i % 2 === 0,
    };
    if (data.chosen) {
      newTargetKeys.push(data.key);
    }
    newMockData.push(data);
  }

  targetKeys.value = newTargetKeys;
  mockData.value = newMockData;
});
</script>

<template>
  <div>
    <Transfer
      :data-source="mockData"
      v-model:target-keys="targetKeys"
      :render="(item) => item.title"
      :one-way="oneWay"
      pagination
    />
    <br />
    <Switch un-checked-children="one way" checked-children="one way" v-model:value="oneWay" />
  </div>
</template>
