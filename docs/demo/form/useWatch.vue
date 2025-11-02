<script lang="tsx">
import { defineComponent } from 'vue';
import { Form, Input, InputNumber, Typography } from 'antd-v';

export default defineComponent({
  setup() {
    const [form] = Form.useForm<{ name: string; age: number }>();
    const nameValue = Form.useWatch('name', form);
    // The selector is static and does not support closures.
    const customValue = Form.useWatch((values) => `name: ${values.name || ''}`, form);
    return () => (
      <>
        <Form form={form} layout="vertical" autocomplete="off">
          <Form.Item name="name" label="Name (Watch to trigger rerender)">
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age (Not Watch)">
            <InputNumber />
          </Form.Item>
        </Form>

        <Typography>
          <pre>Name Value: {nameValue.value}</pre>
          <pre>Custom Value: {customValue.value}</pre>
        </Typography>
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
