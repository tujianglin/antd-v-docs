<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue';
import { Button, Form, Input } from 'antd-v';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    const clientReady = ref<boolean>(false);

    // To disable submit button at the beginning.
    onMounted(() => {
      clientReady.value = true;
    });

    const onFinish = (values: any) => {
      console.log('Finish:', values);
    };
    return () => (
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} autocomplete="off">
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item shouldUpdate>
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady.value ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
