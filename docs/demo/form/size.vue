<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect } from 'antd-v';
// @ts-ignore 11
import type { SizeType } from 'node_modules/antd-v/dist/components/config-provider/SizeContext';

export default defineComponent({
  setup() {
    const componentSize = ref<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size }) => {
      componentSize.value = size;
    };

    return () => (
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize.value }}
        onValuesChange={onFormLayoutChange}
        size={componentSize.value as SizeType}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select options={[{ label: 'Demo', value: 'demo' }]}></Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect treeData={[{ title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }]} />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [{ value: 'hangzhou', label: 'Hangzhou' }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    );
  },
});
</script>
<style lang="less" scoped></style>
