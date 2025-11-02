<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Mentions, Segmented, Select, TreeSelect } from 'antd-v';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);

    return () => (
      <Form
        {...formItemLayout}
        form={form}
        variant={variant.value || 'filled'}
        style={{ maxWidth: '600px' }}
        initialValues={{ variant: 'filled' }}
      >
        <Form.Item label="Form variant" name="variant">
          <Segmented options={['outlined', 'filled', 'borderless', 'underlined']} />
        </Form.Item>

        <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="InputNumber" name="InputNumber" rules={[{ required: true, message: 'Please input!' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="TextArea" name="TextArea" rules={[{ required: true, message: 'Please input!' }]}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Mentions" name="Mentions" rules={[{ required: true, message: 'Please input!' }]}>
          <Mentions />
        </Form.Item>

        <Form.Item label="Select" name="Select" rules={[{ required: true, message: 'Please input!' }]}>
          <Select />
        </Form.Item>

        <Form.Item label="Cascader" name="Cascader" rules={[{ required: true, message: 'Please input!' }]}>
          <Cascader />
        </Form.Item>

        <Form.Item label="TreeSelect" name="TreeSelect" rules={[{ required: true, message: 'Please input!' }]}>
          <TreeSelect />
        </Form.Item>

        <Form.Item label="DatePicker" name="DatePicker" rules={[{ required: true, message: 'Please input!' }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="RangePicker" name="RangePicker" rules={[{ required: true, message: 'Please input!' }]}>
          <RangePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
