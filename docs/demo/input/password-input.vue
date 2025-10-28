<script setup lang="tsx">
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons-vue';
import { Button, Input, Space } from 'antd-v';
import { h, ref } from 'vue';

const passwordVisible = ref(false);

const setPasswordVisible = (val: boolean) => {
  passwordVisible.value = val;
};

const toggleVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
  <Space vertical>
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      :icon-render="(visible) => (visible ? h(EyeTwoTone) : h(EyeInvisibleOutlined))"
    />
    <Space>
      <Input.Password
        placeholder="input password"
        :visibility-toggle="{ visible: passwordVisible, onVisibleChange: setPasswordVisible }"
      />
      <Button :style="{ width: 80 }" @click="toggleVisible">
        {{ passwordVisible ? 'Hide' : 'Show' }}
      </Button>
    </Space>
    <Input.Password disabled placeholder="disabled input password" />
  </Space>
</template>
