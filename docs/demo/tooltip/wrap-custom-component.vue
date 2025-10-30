<script lang="tsx" setup>
import { Tooltip } from 'antd-v';
import {} from 'vue';
const ComponentWithEvents = (props) => <span {...props}>This text is inside a component with the necessary events exposed.</span>;
</script>
<template>
  <Tooltip title="prompt text">
    <ComponentWithEvents />
  </Tooltip>
</template>
