<script setup lang="tsx">
import { Flex, Input, Typography } from 'antd-v';
import { runes } from 'runes2';
</script>

<template>
  <Flex vertical gap="16">
    <div>
      <Typography.Title :level="5">Exceed Max</Typography.Title>
      <Input :count="{ show: true, max: 10 }" value="Hello, antd!" />
    </div>

    <div>
      <Typography.Title :level="5">Emoji count as length 1</Typography.Title>
      <Input :count="{ show: true, strategy: (txt) => runes(txt).length }" value="🔥🔥🔥" />
    </div>

    <div>
      <Typography.Title :level="5">Not exceed max</Typography.Title>
      <Input
        :count="{
          show: true,
          max: 6,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
        }"
        value="🔥 antd"
      />
    </div>
  </Flex>
</template>
