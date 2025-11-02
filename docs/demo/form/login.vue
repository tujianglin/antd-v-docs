<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Checkbox, Flex, Form, Input } from 'antd-v';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const onFinish = (values: any) => {
      console.log('Finish:', values);
    };
    return () => (
      <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: '360px' }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
