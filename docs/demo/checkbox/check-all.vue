<script setup lang="tsx">
import { Checkbox, Divider } from 'antd-v';
import { computed, ref } from 'vue';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const checkedList = ref<string[]>(['Apple', 'Orange']);

const checkAll = computed(() => plainOptions.length === checkedList.value.length);
const indeterminate = computed(() => checkedList.value.length > 0 && checkedList.value.length < plainOptions.length);

const onChange = (list: string[]) => {
  checkedList.value = list;
};

const onCheckAllChange = (e: any) => {
  checkedList.value = e.target.checked ? plainOptions : [];
};
</script>

<template>
  <div>
    <Checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange"> Check all </Checkbox>
    <Divider />
    <CheckboxGroup :options="plainOptions" :value="checkedList" @change="onChange" />
  </div>
</template>
