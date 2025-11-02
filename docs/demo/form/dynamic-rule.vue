<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, ref, watch } from 'vue';
import { Button, Checkbox, Form, Input } from 'antd-v';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    const checkNick = ref(false);

    watch(
      [checkNick, () => form],
      () => {
        form.validateFields(['nickname']);
      },
      { immediate: true, deep: true },
    );

    const onCheck = async () => {
      try {
        const values = await form.validateFields();
        console.log('Success:', values);
      } catch (errorInfo) {
        console.log('Failed:', errorInfo);
      }
    };
    return () => (
      <Form form={form} name="dynamic_rule" style={{ maxWidth: '600px' }}>
        <Form.Item
          {...formItemLayout}
          name="username"
          label="Name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="nickname"
          label="Nickname"
          rules={[{ required: checkNick.value, message: 'Please input your nickname' }]}
        >
          <Input placeholder="Please input your nickname" />
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Checkbox v-model:checked={checkNick.value}>Nickname is required</Checkbox>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={onCheck}>
            Check
          </Button>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
