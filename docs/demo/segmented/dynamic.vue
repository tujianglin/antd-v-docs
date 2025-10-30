<script lang="tsx" setup>
import { Button, Flex, Segmented } from 'antd-v';
import { ref } from 'vue';

const options = ref(['Daily', 'Weekly', 'Monthly']);
const moreLoaded = ref(false);

const handleLoadOptions = () => {
  options.value = [...options.value, 'Quarterly', 'Yearly'];
  moreLoaded.value = true;
};
</script>
<template>
  <Flex gap="small" align="flex-start" vertical>
    <Segmented :options="options" />
    <Button type="primary" :disabled="moreLoaded" @click="handleLoadOptions"> Load more options </Button>
  </Flex>
</template>
