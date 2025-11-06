<script setup lang="tsx">
import { Input, Tooltip } from 'antd-v';
import { ref } from 'vue';

const value = ref('');

const NumericInput = (props: any) => {
  const { value: modelValue, 'onUpdate:value': updateValue } = props;

  const formatNumber = (val: number) => new Intl.NumberFormat().format(val);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      updateValue(inputValue);
    }
  };

  const handleBlur = () => {
    let valueTemp = modelValue;
    if (modelValue.charAt(modelValue.length - 1) === '.' || modelValue === '-') {
      valueTemp = modelValue.slice(0, -1);
    }
    updateValue(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = modelValue ? (
    <span class="numeric-input-title">{modelValue !== '-' ? formatNumber(Number(modelValue)) : '-'}</span>
  ) : (
    'Input a number'
  );

  return (
    <Tooltip trigger="focus" placement="topLeft" class="numeric-input" title={title}>
      <Input {...props} onChange={handleChange} onBlur={handleBlur} maxlength={16}></Input>
    </Tooltip>
  );
};
</script>

<template>
  <NumericInput :style="{ width: '120px' }" v-model:value="value" />
</template>
