<!-- eslint-disable vue/one-component-per-file -->
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Form, Input, Modal, Radio } from 'antd-v';
interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    const formValues = ref<Values>();
    const open = ref(false);

    const onCreate = (values: Values) => {
      console.log('Received values of form: ', values);
      formValues.value = values;
      open.value = false;
    };
    return () => (
      <>
        <Button type="primary" onClick={() => (open.value = true)}>
          New Collection
        </Button>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
        <Modal
          open={open.value}
          title="Create a new collection"
          okText="Create"
          cancelText="Cancel"
          okButtonProps={{ autofocus: true, htmlType: 'submit' }}
          onCancel={() => (open.value = false)}
          destroyOnHidden
          modalRender={(dom) => (
            <Form
              layout="vertical"
              form={form}
              name="form_in_modal"
              initialValues={{ modifier: 'public' }}
              clearOnDestroy
              onFinish={(values) => onCreate(values)}
            >
              {dom}
            </Form>
          )}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title of collection!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="modifier" class="collection-create-form_last-form-item">
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>
          </Form.Item>
        </Modal>
      </>
    );
  },
});
</script>
<style lang="less" scoped></style>
