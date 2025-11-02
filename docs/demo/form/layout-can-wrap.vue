<script lang="tsx">
import { defineComponent } from 'vue';
import { Button, Form, Input } from 'antd-v';

export default defineComponent({
  setup() {
    return () => (
      <Form
        name="wrap"
        labelCol={{ flex: '110px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item label="Normal label" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="A super long label text" name="password" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="A super long label text" name="password1">
          <Input />
        </Form.Item>

        <Form.Item label=" ">
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
