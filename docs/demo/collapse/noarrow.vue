<script lang="tsx" setup>
import { Collapse, CollapseProps } from 'antd-v';
import {} from 'vue';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header with arrow icon',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header with no arrow icon',
    children: <p>{text}</p>,
    showArrow: false,
  },
];

const onChange = (key) => {
  console.log(key);
};
</script>
<template>
  <Collapse :active-key="['1']" @change="onChange" :items="items" />
</template>
