<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd-v';

const onFinish = (values: any) => {
  console.log(values);
};

export default defineComponent({
  setup() {
    return () => (
      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item label="Username">
          <Space>
            <Form.Item name="username" noStyle rules={[{ required: true, message: 'Username is required' }]}>
              <Input style={{ width: '160px' }} placeholder="Please input" />
            </Form.Item>
            <Tooltip title="Useful information">
              <Typography.Link href="#API">Need Help?</Typography.Link>
            </Tooltip>
          </Space>
        </Form.Item>
        <Form.Item label="Address">
          <Space.Compact>
            <Form.Item name={['address', 'province']} noStyle rules={[{ required: true, message: 'Province is required' }]}>
              <Select
                placeholder="Select province"
                options={[
                  { label: 'Zhejiang', value: 'Zhejiang' },
                  { label: 'Jiangsu', value: 'Jiangsu' },
                ]}
              />
            </Form.Item>
            <Form.Item name={['address', 'street']} noStyle rules={[{ required: true, message: 'Street is required' }]}>
              <Input style={{ width: '50%' }} placeholder="Input street" />
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
          <Form.Item name="year" rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>
        <Form.Item label={null}>
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
