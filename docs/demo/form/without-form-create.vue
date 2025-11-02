<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Form, InputNumber, type InputNumberProps } from 'antd-v';

const validatePrimeNumber = (
  number: number,
): {
  validateStatus: any;
  errorMsg: string | null;
} => {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
};

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 12 },
};

const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';

export default defineComponent({
  setup() {
    const number = ref<{
      value: number;
      validateStatus?: any;
      errorMsg?: string | null;
    }>({ value: 11 });

    const onNumberChange: InputNumberProps['onChange'] = (value) => {
      number.value = {
        ...validatePrimeNumber(value as number),
        value: value as number,
      };
    };
    return () => (
      <Form style={{ maxWidth: '600px' }}>
        <Form.Item
          {...formItemLayout}
          label="Prime between 8 & 12"
          validateStatus={number.value.validateStatus}
          help={number.value.errorMsg || tips}
        >
          <InputNumber min={8} max={12} value={number.value.value} onChange={onNumberChange} />
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
