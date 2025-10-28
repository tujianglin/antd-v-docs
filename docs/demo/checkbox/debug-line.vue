<script setup lang="ts">
import { Checkbox, ConfigProvider, Radio, Space } from 'antd-v';

const sharedStyle = {
  border: '1px solid red',
  marginBottom: 16,
};
</script>

<template>
  <div>
    <Space :style="sharedStyle" align="center">
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </Space>

    <Space :style="sharedStyle" align="center">
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </Space>

    <div :style="{ ...sharedStyle, display: 'flex', alignItems: 'center' }">
      <Checkbox value="light" />
      <div>Bamboo</div>
      <Checkbox value="little">Little</Checkbox>
    </div>

    <div :style="{ ...sharedStyle, display: 'flex', alignItems: 'center' }">
      <Radio value="light" />
      <div>Bamboo</div>
      <Radio value="little">Little</Radio>
    </div>

    <div>
      <ConfigProvider
        :theme="{
          token: {
            controlHeight: 48,
          },
        }"
      >
        <Checkbox>Aligned</Checkbox>
      </ConfigProvider>
    </div>

    <div>
      <Checkbox>
        <span style="font-size: 32px">Aligned</span>
      </Checkbox>
    </div>
  </div>
</template>
