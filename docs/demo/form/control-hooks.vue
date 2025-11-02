<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Form, Input, Select, Space } from 'antd-v';
export default defineComponent({
  setup() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();

    const onGenderChange = (value: string) => {
      switch (value) {
        case 'male':
          form.setFieldsValue({ note: 'Hi, man!' });
          break;
        case 'female':
          form.setFieldsValue({ note: 'Hi, lady!' });
          break;
        case 'other':
          form.setFieldsValue({ note: 'Hi there!' });
          break;
        default:
      }
    };

    const onFinish = (values: any) => {
      console.log(values);
    };

    const onReset = () => {
      form.resetFields();
    };

    const onFill = () => {
      form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
    };

    return () => (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: '600px' }}>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
            options={[
              { value: 'male', label: 'male' },
              { value: 'female', label: 'female' },
              { value: 'other', label: 'other' },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
          {{
            default: ({ getFieldValue }) =>
              getFieldValue('gender') === 'other' ? (
                <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              ) : null,
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
