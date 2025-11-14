<script setup lang="tsx">
import { Switch, Transfer } from 'antd-v';
import { ref } from 'vue';

interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
  disabled: i % 3 < 1,
}));

const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);

const targetKeys = ref(oriTargetKeys);
const selectedKeys = ref<string[]>([]);
const disabled = ref(false);
</script>

<template>
  <div>
    <Transfer
      :data-source="mockData"
      :titles="['Source', 'Target']"
      v-model:target-keys="targetKeys"
      v-model:selected-keys="selectedKeys"
      :render="(item) => item.title"
      :disabled="disabled"
      one-way
      style="margin-bottom: 16px"
    />
    <Switch un-checked-children="disabled" checked-children="disabled" v-model:value="disabled" />
  </div>
</template>
