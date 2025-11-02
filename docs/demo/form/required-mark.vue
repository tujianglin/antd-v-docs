<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Form, Input, Radio, Tag } from 'antd-v';
import { InfoCircleOutlined } from '@ant-design/icons-vue';

type RequiredMark = boolean | 'optional' | 'customize';

const customizeRequiredMark = (label, { required }: { required: boolean }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

export default defineComponent({
  setup() {
    const [form] = Form.useForm();
    const requiredMark = ref<RequiredMark>('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
      requiredMark.value = requiredMarkValue;
    };

    return () => (
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMarkValue: requiredMark.value }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark.value === 'customize' ? customizeRequiredMark : requiredMark.value}
      >
        <Form.Item label="Required Mark" name="requiredMarkValue">
          <Radio.Group>
            <Radio.Button value>Default</Radio.Button>
            <Radio.Button value="optional">Optional</Radio.Button>
            <Radio.Button value={false}>Hidden</Radio.Button>
            <Radio.Button value="customize">Customize</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Field A" required tooltip="This is a required field">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B" tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}>
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
