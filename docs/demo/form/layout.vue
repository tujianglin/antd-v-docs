<script lang="tsx">
import { defineComponent, ref } from 'vue';

import { Button, Form, Input, Radio, type FormProps } from 'antd-v';

type LayoutType = FormProps['layout'];

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    const formLayout = ref<LayoutType>('horizontal');

    return () => (
      <Form
        layout={formLayout.value}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={(e) => {
          console.log(e);
        }}
        style={{ maxWidth: formLayout.value === 'inline' ? 'none' : '600px' }}
      >
        <Form.Item label="Form Layout" name="layout">
          <Radio.Group
            v-model:value={formLayout.value}
            optionType="button"
            options={[
              { label: 'Horizontal', value: 'horizontal' },
              { label: 'Vertical', value: 'vertical' },
              { label: 'Inline', value: 'inline' },
            ]}
          ></Radio.Group>
        </Form.Item>
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
