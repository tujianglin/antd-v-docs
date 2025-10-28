<script setup lang="tsx">
import { AutoComplete, Cascader, Flex, Form, Input, Select, Space, TreeSelect, Typography } from 'antd-v';

const { FormItem } = Form;

const options = [
  { value: 'long', label: () => <Typography>long, long, long piece of text</Typography> },
  { value: 'short', label: () => <Typography>short</Typography> },
  { value: 'normal', label: <div>normal</div> },
];
</script>

<template>
  <div>
    <Space wrap>
      <Select value="long, long, long piece of text" style="width: 120px" allow-clear :options="options" />

      <Select placeholder="Select a option" style="width: 120px; height: 60px" allow-clear :options="options" />

      <Select value="normal" placeholder="Select a option" style="width: 120px" allow-clear :options="options" />

      <Select
        :value="['normal']"
        mode="multiple"
        placeholder="Select a option"
        style="width: 120px"
        allow-clear
        :options="options"
      />

      <Select mode="multiple" placeholder="Select a option" style="width: 120px; height: 60px" allow-clear :options="options" />

      <Cascader placeholder="Select a option" style="width: 120px; height: 60px" allow-clear :options="options" />

      <TreeSelect
        show-search
        style="width: 120px; height: 60px"
        placeholder="Please select"
        allow-clear
        :popup-match-select-width="false"
        tree-default-expand-all
        :tree-data="[
          {
            value: 'parent 1',
            title: 'parent 1',
            children: options,
          },
        ]"
      />
      <Select
        prefix="Hello World"
        mode="multiple"
        allow-clear
        placeholder="Select"
        style="min-width: 200px; height: 200px"
        :value="['long']"
        :options="options"
      />
      <Select
        mode="multiple"
        style="width: 200px"
        placeholder="请选择"
        max-tag-count="responsive"
        prefix="城市"
        :options="options"
      />
      <Select style="width: 200px" placeholder="请选择" prefix="城市" :options="options" show-search allow-clear status="error" />
      <Select
        style="width: 100px"
        prefix="Hi"
        :options="options"
        show-search
        allow-clear
        status="warning"
        variant="filled"
        value="Bamboo"
      />
      <Select
        style="width: 100px"
        prefix="Hi"
        :options="options"
        show-search
        allow-clear
        status="error"
        variant="borderless"
        value="Bamboo"
      />
      <Form style="width: 200px" layout="vertical">
        <FormItem label="Label" name="bamboo" initial-value="Bamboo" style="box-shadow: 0 0 0 1px red">
          <Select :options="options" allow-clear placeholder="bamboo" />
        </FormItem>
        <FormItem label="Label" name="bamboo" initial-value="Bamboo" style="box-shadow: 0 0 0 1px red">
          <AutoComplete :options="options" allow-clear placeholder="bamboo" />
        </FormItem>
      </Form>
    </Space>

    <!-- Test for align -->
    <Flex vertical style="width: 200px">
      <!-- Single -->
      <Input prefix="Hi" placeholder="Input" allow-clear />
      <Select prefix="Hi" placeholder="Single" :options="options" allow-clear show-search />
      <Select prefix="Hi" placeholder="Single" :options="options" allow-clear show-search value="Bamboo" />
      <!-- Multiple -->
      <Select placeholder="Multiple" :options="options" allow-clear mode="multiple" />
      <Select prefix="Hi" placeholder="Multiple" :options="options" allow-clear mode="multiple" />
      <Select prefix="Hi" placeholder="Multiple" :options="options" allow-clear mode="multiple" :value="['Bamboo']" />
      <Select placeholder="Multiple" :options="options" allow-clear mode="multiple" :value="['Bamboo']" />
    </Flex>
  </div>
</template>
