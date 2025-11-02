<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent } from 'vue';
import { Alert, Form, Input, Typography } from 'antd-v';

export default defineComponent({
  setup() {
    const [form] = Form.useForm();

    return () => (
      <Form form={form} name="dependencies" autocomplete="off" style={{ maxWidth: '600px' }} layout="vertical">
        <Alert title=" Try modify `Password2` and then modify `Password`" type="info" showIcon />

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        {/* Field */}
        <Form.Item
          label="Confirm Password"
          name="password2"
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>

        {/* Render Props */}
        <Form.Item noStyle dependencies={['password2']}>
          <Typography>
            <p>
              Only Update when <code>password2</code> updated:
            </p>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
