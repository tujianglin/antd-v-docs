<script setup lang="ts">
import { Button, Card, Flex, Typography } from 'antd-v';
import type { CSSProperties } from 'vue';
const cardStyle: CSSProperties = {
  width: '620px',
};
const imgStyle: CSSProperties = {
  display: 'block',
  width: '273px',
};
</script>

<template>
  <Card :style="cardStyle" :body-style="{ padding: 0, overflow: 'hidden' }">
    <Flex justify="space-between">
      <img alt="avatar" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" :style="imgStyle" />
      <Flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px' }">
        <Typography>
          <Typography.Title :level="3"> “antd is an enterprise-class UI design language and Vue UI library.” </Typography.Title>
        </Typography>
        <Button type="primary" href="https://antdv.com" target="_blank">Get Start</Button>
      </Flex>
    </Flex>
  </Card>
</template>
