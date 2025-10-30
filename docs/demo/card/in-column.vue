<script lang="tsx" setup>
import { Card, Col, Row } from 'antd-v';
import {} from 'vue';
</script>
<template>
  <Row :gutter="16">
    <Col :span="8">
      <Card title="Card title" variant="borderless"> Card content </Card>
    </Col>
    <Col :span="8">
      <Card title="Card title" variant="borderless"> Card content </Card>
    </Col>
    <Col :span="8">
      <Card title="Card title" variant="borderless"> Card content </Card>
    </Col>
  </Row>
</template>
