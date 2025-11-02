<script lang="tsx">
import { defineComponent } from 'vue';
import { Alert, Form, Input } from 'antd-v';

export default defineComponent({
  setup() {
    return () => (
      <Form name="trigger" style={{ maxWidth: '600px' }} layout="vertical" autocomplete="off">
        <Alert title="Use 'max' rule, continue type chars to see it" />

        <Form.Item hasFeedback label="Field A" name="field_a" validateTrigger="onBlur" rules={[{ max: 3 }]}>
          <Input placeholder="Validate required onBlur" />
        </Form.Item>

        <Form.Item hasFeedback label="Field B" name="field_b" validateDebounce={1000} rules={[{ max: 3 }]}>
          <Input placeholder="Validate required debounce after 1s" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Field C"
          name="field_c"
          validateFirst
          rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
        >
          <Input placeholder="Validate one by one" />
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
