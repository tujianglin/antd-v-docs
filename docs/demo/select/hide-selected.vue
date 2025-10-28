<script setup lang="tsx">
import { Select } from 'antd-v';
import { computed, ref } from 'vue';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const selectedItems = ref<string[]>([]);

const filteredOptions = computed(() => OPTIONS.filter((o) => !selectedItems.value.includes(o)));
</script>

<template>
  <Select
    mode="multiple"
    placeholder="Inserted are removed"
    v-model:value="selectedItems"
    style="width: 100%"
    :options="
      filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))
    "
  />
</template>
