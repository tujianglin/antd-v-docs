<script setup lang="tsx">
import { Checkbox, Col, Row } from 'antd-v';
import { effect, ref } from 'vue';

const CheckboxGroup = Checkbox.Group;

const value = ref(['A']);

effect(() => {
  console.log(value.value);
});
</script>

<template>
  <CheckboxGroup v-model:value="value" style="width: 100%">
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
