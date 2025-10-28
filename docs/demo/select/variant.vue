<script setup lang="tsx">
import { Flex, Select } from 'antd-v';
</script>

<template>
  <Flex gap="12" vertical>
    <Flex gap="8">
      <Select
        placeholder="Outlined"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
      <Select
        mode="multiple"
        :value="['lucy']"
        placeholder="Outlined"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
    </Flex>
    <Flex gap="8">
      <Select
        placeholder="Filled"
        variant="filled"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
      <Select
        mode="multiple"
        :value="['lucy']"
        placeholder="Filled"
        variant="filled"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
    </Flex>
    <Flex gap="8">
      <Select
        placeholder="Borderless"
        variant="borderless"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
      <Select
        mode="multiple"
        :value="['lucy']"
        placeholder="Borderless"
        variant="borderless"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
    </Flex>
    <Flex gap="8">
      <Select
        placeholder="Underlined"
        variant="underlined"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
      <Select
        mode="multiple"
        :value="['lucy']"
        placeholder="Underlined"
        variant="underlined"
        style="flex: 1"
        :options="[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]"
      />
    </Flex>
  </Flex>
</template>
