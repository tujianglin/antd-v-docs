<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Form, Input, Space } from 'antd-v';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const onFinish = (value: object) => {
      console.log('Form submitted:', JSON.stringify(value, null, 2));
    };
    return () => (
      <Form name="dynamic_form_nest_item" onFinish={onFinish} style={{ maxWidth: '600px' }} autocomplete="off">
        <Form.List name="users">
          {{
            default: ({ fields, operations: { add, remove } }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: '8px' }} align="baseline">
                    <Form.Item {...restField} name={[name, 'first']} rules={[{ required: true, message: 'Missing first name' }]}>
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item {...restField} name={[name, 'last']} rules={[{ required: true, message: 'Missing last name' }]}>
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            ),
          }}
        </Form.List>
        <Form.Item>
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
