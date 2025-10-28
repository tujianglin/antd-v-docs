<script setup lang="tsx">
import { Checkbox, Col, Row } from 'antd-v';

const CheckboxGroup = Checkbox.Group;
</script>

<template>
  <CheckboxGroup style="width: 100%">
    <Row>
      <Col :span="8">
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col :span="8">
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col :span="8">
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col :span="8">
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col :span="8">
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </CheckboxGroup>
</template>
