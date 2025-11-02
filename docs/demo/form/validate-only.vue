<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, ref, watch } from 'vue';
import { Button, Form, Input, Space } from 'antd-v';

const SubmitButton = defineComponent({
  props: ['form'],
  setup(props, { slots }) {
    const submittable = ref<boolean>(false);

    // Watch all values
    const values = Form.useWatch([], props.form);

    watch(
      () => [props.form, values],
      () => {
        props.form
          .validateFields({ validateOnly: true })
          .then(() => (submittable.value = true))
          .catch(() => (submittable.value = false));
      },
      { deep: true },
    );

    return () => (
      <Button type="primary" htmlType="submit" disabled={!submittable.value}>
        {slots.default?.()}
      </Button>
    );
  },
});

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    return () => (
      <Form form={form} name="validateOnly" layout="vertical" autocomplete="off">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form}>Submit</SubmitButton>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
