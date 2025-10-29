<script setup lang="ts">
import { Col, Divider, Row } from 'antd-v';
</script>

<template>
  <div id="components-grid-demo-flex-align">
    <Divider title-placement="left">Align Top</Divider>
    <Row justify="center" align="top">
      <Col :span="4">
        <p class="h-[100px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[50px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[120px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[80px]">col-4</p>
      </Col>
    </Row>

    <Divider title-placement="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col :span="4">
        <p class="h-[100px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[50px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[120px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[80px]">col-4</p>
      </Col>
    </Row>

    <Divider title-placement="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col :span="4">
        <p class="h-[100px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[50px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[120px]">col-4</p>
      </Col>
      <Col :span="4">
        <p class="h-[80px]">col-4</p>
      </Col>
    </Row>
  </div>
</template>

<style>
:deep(#components-grid-demo-flex-align) [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}
</style>
