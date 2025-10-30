<script lang="tsx" setup>
import { Tag } from 'antd-v';
import { ref } from 'vue';
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const singleSelected = ref<string | null>('Books');
const multipleSelected = ref<string[]>(['Movies', 'Music']);
</script>
<template>
  <Tag.CheckableTagGroup :options="tagsData" :value="singleSelected" @change="(val) => (singleSelected = val)" />
  <br />
  <Tag.CheckableTagGroup multiple :options="tagsData" :value="multipleSelected" @change="(val) => (multipleSelected = val)" />
</template>
