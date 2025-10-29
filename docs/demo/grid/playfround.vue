<script lang="tsx" setup>
import { Col, Row, Slider } from 'antd-v';
import { computed, reactive } from 'vue';
const state = reactive<{
  gutterKey: number;
  vgutterKey: number;
  colCountKey: number;
  gutters: { [key: number]: number };
  colCounts: { [key: number]: number };
  vgutters: { [key: number]: number };
}>({
  gutterKey: 1,
  vgutterKey: 1,
  colCountKey: 2,
  gutters: {},
  colCounts: {},
  vgutters: {},
});
[8, 16, 24, 32, 40, 48].forEach((value: number, i: number) => {
  state.gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  state.vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  state.colCounts[i] = value;
});
const rowColHtml = computed(() => {
  const colCount = state.colCounts[state.colCountKey];
  const getter = [state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]];
  let colCode = `<Row :gutter="[${getter}]">\n`;
  for (let i = 0; i < colCount; i++) {
    const spanNum = 24 / colCount;
    colCode += `  <Col :span="${spanNum}"/>\n`;
  }
  colCode += '</Row>';
  return colCode;
});
</script>
<template>
  <div id="components-grid-demo-playground">
    <div style="margin-bottom: 16px">
      <span style="margin-right: 6px">Horizontal Gutter (px):</span>
      <div style="width: 50%">
        <Slider
          v-model:value="state.gutterKey"
          :min="0"
          :max="Object.keys(state.gutters).length - 1"
          :marks="state.gutters"
          :step="null"
        />
      </div>
      <span style="margin-right: 6px">Vertical Gutter (px):</span>
      <div style="width: 50%">
        <Slider
          v-model:value="state.vgutterKey"
          :min="0"
          :max="Object.keys(state.vgutters).length - 1"
          :marks="state.vgutters"
          :step="null"
        />
      </div>
      <span style="margin-right: 6px">Column Count:</span>
      <div style="width: 50%">
        <Slider
          v-model:value="state.colCountKey"
          :min="0"
          :max="Object.keys(state.colCounts).length - 1"
          :marks="state.colCounts"
          :step="null"
        />
      </div>
    </div>
    <Row :gutter="[state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]]">
      <Col
        v-for="item in state.colCounts[state.colCountKey]"
        :key="item.toString()"
        :span="24 / state.colCounts[state.colCountKey]"
      >
        <div>Column</div>
      </Col>
      <Col
        v-for="item in state.colCounts[state.colCountKey]"
        :key="item.toString()"
        :span="24 / state.colCounts[state.colCountKey]"
      >
        <div>Column</div>
      </Col>
    </Row>
    Another Row:
    <Row :gutter="[state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]]">
      <Col
        v-for="item in state.colCounts[state.colCountKey]"
        :key="item.toString()"
        :span="24 / state.colCounts[state.colCountKey]"
      >
        <div>Column</div>
      </Col>
    </Row>
    <pre>{{ rowColHtml }}</pre>
    <br />
    <pre>{{ rowColHtml }}</pre>
  </div>
</template>
