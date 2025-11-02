<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Card, Form, Input, Space, Typography } from 'antd-v';
import { CloseOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    return () => (
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={form}
        name="dynamic_form_complex"
        style={{ maxWidth: '600px' }}
        autocomplete="off"
        initialValues={{ items: [{}] }}
      >
        <Form.List name="items">
          {{
            default: ({ fields, operations: { add, remove } }) => (
              <div style={{ display: 'flex', rowGap: '16px', flexDirection: 'column' }}>
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Item ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item label="Name" name={[field.name, 'name']}>
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="List">
                      <Form.List name={[field.name, 'list']}>
                        {{
                          default: ({ fields: subFields, operations: subOpt }) => (
                            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
                              {subFields.map((subField) => (
                                <Space key={subField.key}>
                                  <Form.Item noStyle name={[subField.name, 'first']}>
                                    <Input placeholder="first" />
                                  </Form.Item>
                                  <Form.Item noStyle name={[subField.name, 'second']}>
                                    <Input placeholder="second" />
                                  </Form.Item>
                                  <CloseOutlined
                                    onClick={() => {
                                      subOpt.remove(subField.name);
                                    }}
                                  />
                                </Space>
                              ))}
                              <Button type="dashed" onClick={() => subOpt.add()} block>
                                + Add Sub Item
                              </Button>
                            </div>
                          ),
                        }}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            ),
          }}
        </Form.List>

        <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
