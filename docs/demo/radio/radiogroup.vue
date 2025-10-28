<script setup lang="tsx">
import { BarChartOutlined, DotChartOutlined, LineChartOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import { Flex, Radio } from 'antd-v';
import { ref } from 'vue';

const RadioGroup = Radio.Group;

const value = ref(1);

const options = [
  {
    value: 1,
    class: 'option-1',
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <LineChartOutlined style="font-size: 18px" />
        LineChart
      </Flex>
    ),
  },
  {
    value: 2,
    class: 'option-2',
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <DotChartOutlined style="font-size: 18px" />
        DotChart
      </Flex>
    ),
  },
  {
    value: 3,
    class: 'option-3',
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <BarChartOutlined style="font-size: 18px" />
        BarChart
      </Flex>
    ),
  },
  {
    value: 4,
    class: 'option-4',
    label: (
      <Flex gap="small" justify="center" align="center" vertical>
        <PieChartOutlined style="font-size: 18px" />
        PieChart
      </Flex>
    ),
  },
];
</script>

<template>
  <RadioGroup v-model:value="value" :options="options" />
</template>
