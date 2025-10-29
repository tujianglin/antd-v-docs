<script setup lang="ts">
import { Col, Divider, Row } from 'antd-v';
import { CSSProperties } from 'vue';

const style: CSSProperties = { background: '#0092ff', padding: '8px 0' };
</script>

<template>
  <div id="grid-demo-gutter">
    <Divider title-placement="start">Horizontal</Divider>
    <Row :gutter="16">
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
    </Row>
    <Divider title-placement="start">Responsive</Divider>
    <Row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
    </Row>
    <Divider title-placement="start">Vertical</Divider>
    <Row :gutter="[16, 24]">
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
    </Row>
    <Divider title-placement="start">Gutter(string)</Divider>
    <Row gutter="2rem">
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div :style="style">col-6</div>
      </Col>
    </Row>
  </div>
</template>
